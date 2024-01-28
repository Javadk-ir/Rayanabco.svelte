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
    <ToastSuccess/>
    {#if form?.url}
    <small style="display: none;">{window.location.href = form?.url}</small>
    {/if}
    <small style="display: none;">{window.location.reload()}</small>

    {/if}

    <div class="row">
    {#if order.pishfactor != undefined}
      <div class="col-2">
        <form action="?/download" method="POST" use:enhance>
          <input type="hidden" name="ّFileToDownload" value="{order.pishfactor}">
        <button type="submit" class="btn btn-success btn-sm">دانلود پیش فاکتور</button>
      </form>
      </div>
    {/if}
    {#if order.pishfactor1 != undefined}
      <div class="col-2">
        <form action="?/download" method="POST" use:enhance>
          <input type="hidden" name="FileToDownload" value="{order.pishfactor1}">
        <button class="btn btn-success btn-sm">دانلود پیش فاکتور</button>
        </form>
      </div>
    {/if}
    {#if order.pishfactor2 != undefined}
      <div class="col-2">
        <form action="?/download" method="POST" use:enhance>
          <input type="hidden" name="FileToDownload" value="{order.pishfactor2}">
        <button class="btn btn-success btn-sm">دانلود پیش فاکتور</button>
        </form>
      </div>
    {/if}
    {#if order.pishfactor3 != undefined}
      <div class="col-2">
        <form action="?/download" method="POST" use:enhance>
          <input type="hidden" name="FileToDownload" value="{order.pishfactor3}">
        <button class="btn btn-success btn-sm">دانلود پیش فاکتور</button>
        </form>
      </div>
    {/if}


    {#if order.nextstep=='انبار' || order.nextstep=='رهگیری' ||
    order.nextstep=='تحویل' || order.nextstep=='اتمام' }
    {#if order.factor != undefined}
    <div class="col-2">
      <form action="?/download" method="POST" use:enhance>
        <input type="hidden" name="FileToDownload" value="{order.factor}">
      <button class="btn btn-success btn-sm">دانلود فاکتور</button>
      </form>
    </div>
  {/if}
  {#if order.factor1 != undefined}
    <div class="col-2">
      <form action="?/download" method="POST" use:enhance>
        <input type="hidden" name="FileToDownload" value="{order.factor1}">
      <button class="btn btn-success btn-sm">دانلود فاکتور</button>
      </form>
    </div>
  {/if}
  {#if order.factor2 != undefined}
    <div class="col-2">
      <form action="?/download" method="POST" use:enhance>
        <input type="hidden" name="FileToDownload" value="{order.factor2}">
      <button class="btn btn-success btn-sm">دانلود فاکتور</button>
      </form>
    </div>
  {/if}
  {#if order.factor3 != undefined}
    <div class="col-2">
      <form action="?/download" method="POST" use:enhance>
        <input type="hidden" name="FileToDownload" value="{order.factor3}">
      <button class="btn btn-success btn-sm">دانلود فاکتور</button>
      </form>
    </div>
  {/if}
  {/if}
  {#if order.chek != undefined}
    <div class="col-2">
      <form action="?/download" method="POST" use:enhance>
        <input type="hidden" name="FileToDownload" value="{order.chek}">
      <button class="btn btn-success btn-sm">دانلود چک</button>
      </form>
    </div>
  {/if}
  {#if order.havale != undefined}
  <div class="col-2">
    <form action="?/download" method="POST" use:enhance>
      <input type="hidden" name="FileToDownload" value="{order.havale}">
    <button class="btn btn-success btn-sm">دانلود حواله</button>
    </form>
  </div>
{/if}
    </div>
    <!-- Create Deal Wizard -->
    <div id="wizard-create-deal" class="bs-stepper vertical mt-2">
      {#if order.nextstep != 'رد شده' || order.nextstep == 'اتمام'}
      <div class="bs-stepper-header">
        <!-- STEP 1: Order Placed -->
        {#if client.class == "A" || client.class == "B"}
          <StepSuccess
            topclass="true"
            date11={order.createdAt}
            id="سفارش ثبت شد"
            idcaption="توسط {order.submittedby}"
          />
        {:else}
          <StepSuccess
            id="سفارش ثبت شد"
            idcaption="توسط {order.submittedby}"
          />
        {/if}
        <!--/ STEP 1: Order Placed -->
        <div class="line"></div>

        <!-- STEP 2: Order Accepted by sell management -->
        {#if order.nextstep == "مدیریت فروش"}
          <StepWarning id="مدیر فروش" />
        {:else if client.class == "A" || client.class == "B"}
          <StepSuccess
            topclass="true"
            id="مدیر فروش"
            idcaption="توسط {order.sellaccept} "
            date11={order.createdAt}
            date22={order.sellacceptdate}
          />
        {:else}
          <StepSuccess
            id="مدیر فروش"
            idcaption="توسط {order.sellaccept} "
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
              idcaption="  بارگزاری: {order.userwhoupload} <br> تایید: {order.tayidby} "
              topclass="true"
              date11={order.tarikhupload}
              date22={order.tarikhtayid}
            />
          {:else}
            <StepSuccess
              id="مدارک مالی"
              idcaption="  بارگزاری: {order.userwhoupload} <br> تایید: {order.tayidby} "
            />
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
              idcaption="توسط {order.calcaccept} "
              topclass="true"
              date11={order.tarikhupload}
              date22={order.calcacceptdate}
            />
          {:else}
            <StepSuccess
              id="حسابداری"
              idcaption="توسط {order.calcaccept} "
            />
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
              idcaption="توسط {order.storageaccept}"
              topclass="true"
              date11={order.calcacceptdate}
              date22={order.storageacceptdate}
            />
          {:else}
            <StepSuccess
              id="بسته بندی"
              idcaption="توسط {order.storageaccept}"
            />
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
              idcaption="توسط {order.tahvilaccept}"
              topclass="true"
              date11={order.storageacceptdate}
              date22={order.tahvilacceptdate}
            />
          {:else}
            <StepSuccess
              id="تحویل به کالا رسان"
              idcaption="توسط {order.tahvilaccept}"
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
              idcaption="توسط {order.rahaccept}"
              topclass="true"
              date11={order.tahvilacceptdate}
              date22={order.rahacceptdate}
            />
          {:else}
            <StepSuccess
              id="رهگیری مرسوله"
              idcaption="توسط {order.rahaccept}"
            />
          {/if}
        {:else}
          <Stepnothing id="رهگیری مرسوله" />
        {/if}
        <!--/ STEP 7: Rahgiri-->
        <hr />
        <div class="step">
          <form action="?/shopreject" method="POST" use:enhance>
            <button class="btn btn-danger btn-lg col-12">لغو</button>
          </form>
        </div>
      </div>
      
      {/if}
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

          <!-- STEP 3: Upload Mali -->


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
                action="?/shopuploadmali"
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
          <!--/ STEP 3: upload mali -->

                    <!-- STEP 4: Tayid Mali -->          
              {#if order.nextstep == "تاییدمالی"}
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
          <br>
          <br>
            <h3 style="text-align: center;">اطلاعات مربوط را {order.userwhoupload} بارگذاری کرده است</h3>
            {#if order.havale != undefined}
          <form id="formAuthentication" class="mb-3" action="?/download" method="POST" use:enhance >
            <input type="hidden" name="ّFileToDownload" value="{order.havale}">
            <button class="dropdown-item btn btn-primary col-12" type="submit">دانلود حواله</button>
            </form>
        {/if}

        {#if order.chek != undefined}
        <form id="formAuthentication" class="mb-3" action="?/download" method="POST" use:enhance >
          <input type="hidden" name="ّFileToDownload" value="{order.chek}">
          <button class="dropdown-item btn btn-primary col-12" type="submit">دانلود چک</button>
          </form>
        {/if}
        {#if order.havalebaz == 'بله'}
        <form
        action="?/download"
        method="POST"
        use:enhance
      >
        <div class="col-md-12" style="padding-top:2%;text-align:center">
          <h5>

            تاریخ حواله باز: {order.havalebaztarikh}
          </h5>
      </form>
      {/if}
        
            <form
              action="?/shopacceptmali"
              method="POST"
              use:enhance
              style="padding-top: 5%;"
            >
              <div class="col-md-12" style="padding-top:2%">

              <div class="col-md-12" style="padding-top:2%">
                <button type="submit" class="btn btn-success btn-lg col-12"
                  >بنده {client.name} تمامی مدارک مالی بالا بررسی کرده و صحت و درستی اطلاعات مالی ذکر و یا بارگذاری شده سفارش {order.ordernumber} که توسط {order.submittedby} ثبت شده است را تایید مینایم</button>
              </div>
            </form>
          {/if}
        {/if}
        <!--/ STEP 4: Tayid mali -->


        
                    <!-- STEP 5: Anbar -->          
                    {#if order.nextstep == "انبار"}
                    {#if client.class == "A" || client.class == "B" || client.parentProffesion == "انبار"}
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
                                        <div class="col-12" style="padding-top: 1%;">
                      <button
                        class="btn btn-primary col-12 btn-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#tozihathesabdar"
                        aria-expanded="false"
                        aria-controls="tozihatkarshenasforosh"
                      >
                        حسابدار {order.calcaccept}‎ ‎ ‎
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </button>
                    </div>
                    <div class="col-12">
                      <div class="collapse" id="tozihathesabdar">
                        <div class="d-grid d-sm-flex p-3 border alert-primary">
                          <span class="lh-2">
                            {order.calccaption}
                          </span>
                        </div>
                      </div>
                    </div>
                  {/if}
        
                  {#if client.class == "A" || client.parentProffesion == "حسابدار" || client.parentProffesion == "فروش"}
                    <form
                      action="?/shopacceptanbar"
                      method="POST"
                      use:enhance
                      style="padding-top: 5%;"
                    >
                      
                    <div class="btn-group col-12">
                      <button type="button" class="btn btn-primary col-12 btn-lg dropdown-toggle hide-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                        دانلود بارنامه ‎‎<i class="fa-solid fa-arrow-down"></i>
                      </button>
                      <ul class="dropdown-menu col-12">
                        <li><a class="dropdown-item" href="{order.ordernumber}/rasht/pish">ادرس رشت و پیش کرایه</a></li>
                        <li><a class="dropdown-item" href="{order.ordernumber}/rasht/pas">ادرس رشت و پس کرایه</a></li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="{order.ordernumber}/tehran/pas">ادرس تهران و پس کرایه</a></li>
                        <li><a class="dropdown-item" href="{order.ordernumber}/tehran/pish">ادرس تهران و پیش کرایه</a></li>
                      </ul>
                    </div>
                      <div class="col-md-12" style="padding-top:10% ">
                        <button type="submit" class="btn btn-success btn-lg col-md-12"> در صورت اتمام بسته بندی محصولات کلیک کنید</button>
                      </div>
                    </form>
                  {/if}
                {/if}
                <!--/ STEP 5: Anbar -->
                        
                    <!-- STEP 6: tahvil be kala resaan -->          
                    {#if order.nextstep == "تحویل"}
                    {#if client.class == "A" || client.class == "B" || client.parentProffesion == "انبار"}
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
                                        <div class="col-12" style="padding-top: 1%;">
                      <button
                        class="btn btn-primary col-12 btn-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#tozihathesabdar"
                        aria-expanded="false"
                        aria-controls="tozihatkarshenasforosh"
                      >
                        حسابدار {order.calcaccept}‎ ‎ ‎
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </button>
                    </div>
                    <div class="col-12">
                      <div class="collapse" id="tozihathesabdar">
                        <div class="d-grid d-sm-flex p-3 border alert-primary">
                          <span class="lh-2">
                            {order.calccaption}
                          </span>
                        </div>
                      </div>
                    </div>
                  {/if}
        
                  {#if client.class == "A" || client.parentProffesion == "حسابدار" || client.parentProffesion == "فروش"}
                    <form
                      action="?/shopaccepttahvil"
                      method="POST"
                      use:enhance
                      style="padding-top: 5%;"
                    >
                      
                    <div class="btn-group col-12">
                      <button type="button" class="btn btn-primary col-12 btn-lg dropdown-toggle hide-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                        دانلود بارنامه ‎‎<i class="fa-solid fa-arrow-down"></i>
                      </button>
                      <ul class="dropdown-menu col-12">
                        <li><a class="dropdown-item" href="{order.ordernumber}/rasht/pish">ادرس رشت و پیش کرایه</a></li>
                        <li><a class="dropdown-item" href="{order.ordernumber}/rasht/pas">ادرس رشت و پس کرایه</a></li>
                        <li>
                          <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="{order.ordernumber}/tehran/pas">ادرس تهران و پس کرایه</a></li>
                        <li><a class="dropdown-item" href="{order.ordernumber}/tehran/pish">ادرس تهران و پیش کرایه</a></li>
                      </ul>
                    </div>
                      <div class="col-md-12" style="padding-top:10% ">
                        <button type="submit" class="btn btn-success btn-lg col-md-12"> در صورت تحویل بار به کالا رسان کلیک کنید</button>
                      </div>
                    </form>
                  {/if}
                {/if}
                <!--/ STEP 6: tahvil be kala resaan -->
                
                    <!-- STEP 7: rahgiri -->          
                    {#if order.nextstep == "رهگیری"}
                    {#if client.class == "A" || client.class == "B" || client.parentProffesion == "انبار"}
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
                                        <div class="col-12" style="padding-top: 1%;">
                      <button
                        class="btn btn-primary col-12 btn-lg"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#tozihathesabdar"
                        aria-expanded="false"
                        aria-controls="tozihatkarshenasforosh"
                      >
                        حسابدار {order.calcaccept}‎ ‎ ‎
                        <i class="fa-solid fa-up-right-from-square"></i>
                      </button>
                    </div>
                    <div class="col-12">
                      <div class="collapse" id="tozihathesabdar">
                        <div class="d-grid d-sm-flex p-3 border alert-primary">
                          <span class="lh-2">
                            {order.calccaption}
                          </span>
                        </div>
                      </div>
                    </div>
                  {/if}
        
                  {#if client.class == "A" || client.parentProffesion == "حسابدار" || client.parentProffesion == "فروش"}
                    <form
                      action="?/shopacceptrahgiri"
                      method="POST"
                      use:enhance
                      style="padding-top: 5%;"
                      enctype="multipart/form-data"
                    >
                      
                    <div class="col-12" style="text-align: center;">
                      <hr>
                      <h5>لطفا بارنامه را بارگذاری کنید</h5><br>
                      <small><span class="text-danger">توجه: در صورت نبود بارنامه یک فایل Word ساخته و
                          اطلاعات مربوطه را درون ان نوشته </span></small>
                      <br>
                    </div>
                    <div class="col-md-12" style="padding-top:10% ">
                      <label for="file">فایل</label>
                      <input type="file" class="form-control" name="file" id="file" required>
                    </div>
                      <div class="col-md-12" style="padding-top:10% ">
                        <button type="submit" class="btn btn-success btn-lg col-md-12"> اتمام سفارش</button>
                      </div>
                    </form>
                  {/if}
                {/if}
                <!--/ STEP 7: rahgiri -->
                <!-- STEP 8: END -->
                {#if order.nextstep == "اتمام"}
                <h3 style="text-align: center;" class="text-success">سفارش {order.ordernumber} که توسط {order.submittedby} ثبت شده بود و طرف حساب {order.name} بود خوشبختانه با موفقیت تایید و ارسال شده!</h3>
                {/if}
                {#if order.nextstep == "رد شده"}
                <h3 style="text-align: center;" class="text-danger">سفارش {order.ordernumber} که توسط {order.submittedby} ثبت شده بود متاسفانه توسط {order.bywho} -  {order.rejectby} رد شد</h3>
                {/if}
                <!--/ STEP 8: END -->

        </div>
      </div>
    </div>
    <!-- /Create Deal Wizard -->
  </div>
</div>

<!-- / Content -->
