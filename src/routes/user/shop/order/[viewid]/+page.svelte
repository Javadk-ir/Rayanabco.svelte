<script lang="ts">
  import type { PageData } from "./$types";
  import { enhance } from "$app/forms";
  import { onMount } from "svelte";

  import StepSuccess from "$com/order/stepsuccess.svelte";
  import StepDanger from "$com/order/stepdanger.svelte";
  import StepWarning from "$com/order/stepwarning.svelte";
  import Stepnothing from "$com/order/stepnothing.svelte";
  import ToastSuccess from "$com/Formsuccess.svelte";
  import { goto } from "$app/navigation";
  export let form;

  export let data: PageData;
  $: ({ order, client } = data);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/vendor/libs/bs-stepper/bs-stepper.css"
  />
</svelte:head>

<!-- Content wrapper -->
<div class="content-wrapper">
  <!-- Content -->
  <div class="container-xxl flex-grow-1 container-p-y">
    <h4 class="py-3 breadcrumb-wrapper mb-4">
      <span class="text-muted fw-light">پیگیری سفارش /</span>
      {order.ordernumber}
    </h4>
    {#if form?.success}
      <ToastSuccess />
      <small style="display: none;">{goto("/user/shop/")}</small>
    {/if}

    <!-- Create Deal Wizard -->
    <div id="wizard-create-deal" class="bs-stepper vertical mt-2">
      <div class="bs-stepper-header">
        <!-- STEP 1: Order Placed -->
        {#if client.class == "A" || client.class == "B"}
          <StepSuccess
            topclass="true"
            date11={order.createdAt}
            id="سفارش ثبت شد"
            idcaption="توسط {order.submittedby} ثبت شد"
          />
        {:else}
          <StepSuccess
            id="سفارش ثبت شد"
            idcaption="توسط {order.submittedby} ثبت شد"
          />
        {/if}
        <!--/ STEP 1: Order Placed -->
        <div class="line"></div>

        <!-- STEP 2: Order Accepted by sell management -->
        {#if order.nextstep == "مدیریت فروش"}
          <StepWarning id="مدیر فروش" />
        {:else if order.nextstep == "رد شده" && order.rejectby == "فروش"}
          <StepDanger
            id="مدیر فروش"
            idcaption="توسط {order.sellaccept} رد شد"
          />
        {:else if client.class == "A" || client.class == "B"}
          <StepSuccess
            topclass="true"
            id="مدیر فروش"
            idcaption="توسط {order.sellaccept} تایید شد"
            date11={order.createdAt}
            date22={order.sellacceptdate}
          />
        {:else}
          <StepSuccess
            id="مدیر فروش"
            idcaption="توسط {order.sellaccept} تایید شد"
          />
        {/if}
        <!--/ STEP 2: Order Accepted by sell management -->
        <div class="line"></div>

        <!-- STEP 3: Order madarek mali Upload nd Madarek mali Tayid-->
        {#if order.nextstep == "اپلودمالی" || order.nextstep == "تاییدمالی"}
          <StepWarning id="مدارک مالی" />
        {:else if order.nextstep == "حسابداری" || order.nextstep == "انبار" || order.nextstep == "اتمام" || order.nextstep == "رهگیری" || order.nextstep == "تحویل"}
          {#if client.class == "A" || client.class == "B"}
            <StepSuccess
              id="مدارک مالی"
              idcaption=" توسط {order.userwhoupload} بارگزاری  شد <br> توسط {order.tayidby} تایید شد"
              topclass="true"
              date11={order.tarikhupload}
              date22={order.tarikhtayid}
            />
          {:else}
            <StepSuccess
              id="مدارک مالی"
              idcaption=" توسط {order.tayidby} تایید شد<br> {order.userwhoupload} بارگزاری و تایید شد"
            />
          {/if}
          {#if order.nextstep == "رد شده" && order.rejectby == "حسابدار"}
            <StepDanger id="مدارک مالی" idcaption="توسط {order.bywho} رد شد" />
          {/if}
        {:else}
          <Stepnothing id="مدارک مالی" />
        {/if}
        <!--/ STEP 3: Order madarek mali Upload nd Madarek mali Tayid-->
        <div class="line"></div>

        <!-- STEP 4: Order madarek mali Upload nd Madarek mali Tayid-->
        {#if order.nextstep == "حسابداری"}
          <StepWarning id="حسابداری" />
        {:else if order.nextstep == "انبار" || order.nextstep == "اتمام" || order.nextstep == "رهگیری" || order.nextstep == "تحویل"}
          {#if client.class == "A" || client.class == "B"}
            <StepSuccess
              id="حسابداری"
              idcaption="توسط {order.calcaccept} تایید شد"
              topclass="true"
              date11={order.tarikhupload}
              date22={order.calcacceptdate}
            />
          {:else}
            <StepSuccess
              id="حسابداری"
              idcaption="توسط {order.calcaccept} تایید شد"
            />
          {/if}
          {#if order.nextstep == "رد شده" && order.rejectby == "حسابدار"}
            <StepDanger id="حسابداری" idcaption="توسط {order.bywho} رد شد" />
          {/if}
        {:else}
          <Stepnothing id="حسابداری" />
        {/if}
        <!--/ STEP 4: Order madarek mali Upload nd Madarek mali Tayid-->
        <div class="line"></div>

        <!-- STEP 5: Anbar Accept-->
        {#if order.nextstep == "انبار"}
          <StepWarning id="بسته بندی" />
        {:else if order.nextstep == "اتمام" || order.nextstep == "رهگیری" || order.nextstep == "تحویل"}
          {#if client.class == "A" || client.class == "B"}
            <StepSuccess
              id="بسته بندی"
              idcaption="توسط {order.storageaccept} بسته بندی شد"
              topclass="true"
              date11={order.calcacceptdate}
              date22={order.storageacceptdate}
            />
          {:else}
            <StepSuccess
              id="بسته بندی"
              idcaption="توسط {order.storageaccept} بسته بندی شد"
            />
          {/if}
          {#if order.nextstep == "رد شده" && order.rejectby == "انبار"}
            <StepDanger id="بسته بندی" idcaption="توسط {order.bywho} رد شد" />
          {/if}
        {:else}
          <Stepnothing id="بسته بندی" />
        {/if}
        <!--/ STEP 5: Anbar Accept-->
        <div class="line"></div>

        <!-- STEP 6: Tahvil be Kala Resan-->
        {#if order.nextstep == "تحویل"}
          <StepWarning id="تحویل به کالا رسان" />
        {:else if order.nextstep == "اتمام" || order.nextstep == "رهگیری"}
          {#if client.class == "A" || client.class == "B"}
            <StepSuccess
              id="تحویل به کالا رسان"
              idcaption="توسط {order.tahvilaccept} به کالا رسان تحویل داده شد"
              topclass="true"
              date11={order.storageacceptdate}
              date22={order.tahvilacceptdate}
            />
          {:else}
            <StepSuccess
              id="تحویل به کالا رسان"
              idcaption="توسط {order.tahvilaccept} به کالا رسان تحویل داده شد"
            />
          {/if}
          {#if order.nextstep == "رد شده" && order.rejectby == "تحویل"}
            <StepDanger
              id="تحویل به کالا رسان"
              idcaption="توسط {order.bywho} رد شد"
            />
          {/if}
        {:else}
          <Stepnothing id="تحویل به کالا رسان" />
        {/if}
        <!--/ STEP 6: Tahvil be Kala Resan-->
        <div class="line"></div>
        <!-- STEP 7: Rahgiri-->
        {#if order.nextstep == "رهگیری"}
          <StepWarning id="رهگیری مرسوله" />
        {:else if order.nextstep == "اتمام"}
          {#if client.class == "A" || client.class == "B"}
            <StepSuccess
              id="رهگیری مرسوله"
              idcaption="توسط {order.rahaccept} رهگیری شد"
              topclass="true"
              date11={order.tahvilacceptdate}
              date22={order.rahacceptdate}
            />
          {:else}
            <StepSuccess
              id="رهگیری مرسوله"
              idcaption="توسط {order.rahaccept} رهگیری شد"
            />
          {/if}
          {#if order.nextstep == "رد شده" && order.rejectby == "رهگیری"}
            <StepDanger
              id="رهگیری مرسوله"
              idcaption="توسط {order.bywho} رد شد"
            />
          {/if}
        {:else}
          <Stepnothing id="رهگیری مرسوله" />
        {/if}
        <!--/ STEP 7: Rahgiri-->
        <hr />
        <div class="step">
          <form action="?/sellManangementAccept" method="POST" use:enhance>
            <button class="btn btn-danger btn-lg col-12">لغو</button>
          </form>
        </div>
      </div>
      <div class="bs-stepper-content">
        '
        <div class="row">
          <!-- STEP 1: Order Placed -->

          {#if order.nextstep == "مدیریت فروش"}
            {#if client.class == "A" || client.childProffesion == "فروش - مدیر"}
              <div class="col-12">
                <button
                  class="btn btn-primary col-12 btn-lg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#tozihatkarshenasforosh"
                  aria-expanded="false"
                  aria-controls="tozihatkarshenasforosh"
                >
                  توضیحات کارشناس {order.submittedby}‎ ‎ ‎
                  <i class="fa-solid fa-up-right-from-square"></i>
                </button>
              </div>
              <div class="col-12">
                <div class="collapse" id="tozihatkarshenasforosh">
                  <div class="d-grid d-sm-flex p-3 border alert-primary">
                    <span class="lh-2">
                      {order.buyerinfo}
                    </span>
                  </div>
                </div>
              </div>
              <form
                action="?/shopManangementAccept"
                method="POST"
                use:enhance
                style="padding-top: 5%;"
              >
                <div class="col-md-12">
                  <label for="توضیحات شما">توضیحات شما</label>
                  <input
                    name="sellcaption"
                    type="text"
                    class="form-control"
                  /><br />
                </div>
                <div class="col-md-12">
                  <button class="btn btn-success col-12">تایید</button>
                </div>
              </form>
            {/if}
          {/if}
          <!--/ STEP 1: Order Placed -->

          <!-- STEP 2: Order Accepted by sell management -->
          {#if order.nextstep == "حسابداری"}
            {#if client.class == "A" || client.class == "B" || client.parentProffesion == "حسابدار"}
              <div class="col-12">
                <button
                  class="btn btn-primary col-12 btn-lg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#tozihatkarshenasforosh"
                  aria-expanded="false"
                  aria-controls="tozihatkarshenasforosh"
                >
                  توضیحات کارشناس {order.submittedby}‎ ‎ ‎
                  <i class="fa-solid fa-up-right-from-square"></i>
                </button>
              </div>
              <div class="col-12">
                <div class="collapse" id="tozihatkarshenasforosh">
                  <div class="d-grid d-sm-flex p-3 border alert-primary">
                    <span class="lh-2">
                      {order.buyerinfo}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-12" style="padding-top: 1%;">
                <button
                  class="btn btn-primary col-12 btn-lg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#tozihatmodirforosh"
                  aria-expanded="false"
                  aria-controls="tozihatkarshenasforosh"
                >
                  مدیر فروش {order.sellaccept}‎ ‎ ‎
                  <i class="fa-solid fa-up-right-from-square"></i>
                </button>
              </div>
              <div class="col-12">
                <div class="collapse" id="tozihatmodirforosh">
                  <div class="d-grid d-sm-flex p-3 border alert-primary">
                    <span class="lh-2">
                      {order.sellcaption}
                    </span>
                  </div>
                </div>
              </div>
            {/if}

            {#if client.class == "A" || client.parentProffesion == "حسابدار"}
              <form
                action="?/shopcalcaccept"
                method="POST"
                use:enhance
                style="padding-top: 5%;"
                enctype="multipart/form-data"
              >
                <div class="col-md-12">
                  <label for="توضیحات شما">توضیحات شما</label>
                  <input name="calccaption" type="text" class="form-control" />
                </div>
                <div class="col-md-12" style="padding-top:2%">
                  <label for="فاکتور"
                    >فاکتور اول <span class="text-danger">*</span></label
                  >
                  <input name="factor1" type="file" class="form-control" />
                </div>
                <div class="col-md-12" style="padding-top:2%">
                  <label for="فاکتور">فاکتور دوم </label>
                  <input name="factor2" type="file" class="form-control" />
                </div>
                <div class="col-md-12" style="padding-top:2%">
                  <label for="فاکتور">فاکتور سوم </label>
                  <input
                    type="file"
                    class="form-control"
                    id="factor3"
                    name="factor3"
                  />
                </div>
                <div class="col-md-12" style="padding-top:2%">
                  <label for="فاکتور">فاکتور چهارم </label>
                  <input name="factor4" type="file" class="form-control" />
                </div>
                <div class="col-md-12" style="padding-top:2%">
                  <button type="submit" class="btn btn-success col-12"
                    >تایید</button
                  >
                </div>
              </form>
            {/if}
          {/if}
          <!--/ STEP 2: Order Accepted by sell management -->

          <!-- STEP 2: Order Accepted by sell management -->
          {#if order.nextstep == "اپلودمالی"}
            {#if client.class == "A" || client.class == "B" || client.parentProffesion == "حسابدار" || client.parentProffesion == "فروش"}
              <div class="col-12">
                <button
                  class="btn btn-primary col-12 btn-lg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#tozihatkarshenasforosh"
                  aria-expanded="false"
                  aria-controls="tozihatkarshenasforosh"
                >
                  توضیحات کارشناس {order.submittedby}‎ ‎ ‎
                  <i class="fa-solid fa-up-right-from-square"></i>
                </button>
              </div>
              <div class="col-12">
                <div class="collapse" id="tozihatkarshenasforosh">
                  <div class="d-grid d-sm-flex p-3 border alert-primary">
                    <span class="lh-2">
                      {order.buyerinfo}
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-12" style="padding-top: 1%;">
                <button
                  class="btn btn-primary col-12 btn-lg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#tozihatmodirforosh"
                  aria-expanded="false"
                  aria-controls="tozihatkarshenasforosh"
                >
                  مدیر فروش {order.sellaccept}‎ ‎ ‎
                  <i class="fa-solid fa-up-right-from-square"></i>
                </button>
              </div>
              <div class="col-12">
                <div class="collapse" id="tozihatmodirforosh">
                  <div class="d-grid d-sm-flex p-3 border alert-primary">
                    <span class="lh-2">
                      {order.sellcaption}
                    </span>
                  </div>
                </div>
              </div>
            {/if}

            {#if client.class == "A" || client.parentProffesion == "حسابدار" || client.parentProffesion == "فروش"}
              <form
                action="?/shopacceptmali"
                method="POST"
                use:enhance
                style="padding-top: 5%;"
                enctype="multipart/form-data"
              >
                <div class="col-md-12" style="padding-top:2%">

                    <label
                      
                      id="havalebaztarikhlabal"
                      for="havalebaztarikh">تاریخ سر رسید <small class="text-danger">در صورت وجود</small></label
                    >
                    <input
                      type="text"
                      name="havalebaztarikh"
                      id="havalebaztarikh"
                      class="form-control"
                    />
            
                </div>
                <div class="col-md-12" style="padding-top:2%">
                  <label for="رسید حواله">رسید حواله </label>
                  <input name="factor1" type="file" class="form-control" />
                </div>
                <div class="col-md-12" style="padding-top:2%">
                  <label for="رسید چک">رسید چک </label>
                  <input name="factor2" type="file" class="form-control" />
                </div>

                <div class="col-md-12" style="padding-top:2%">
                  <button type="submit" class="btn btn-success col-12"
                    >تایید</button
                  >
                </div>
              </form>
            {/if}
          {/if}
          <!--/ STEP 2: Order Accepted by sell management -->
        </div>
      </div>
    </div>
    <!-- /Create Deal Wizard -->
  </div>
</div>

<!-- / Content -->
