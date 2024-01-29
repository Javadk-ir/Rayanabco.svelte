<script lang="ts">
    import type { PageData } from "./$types";
    import { enhance } from "$app/forms";
    import StepSuccess from "$com/order/stepsuccess.svelte";
    import StepWarning from "$com/order/stepwarning.svelte";
    import Stepnothing from "$com/order/stepnothing.svelte";
    import ToastSuccess from "$com/Formsuccess.svelte";
    export let form;
    export let data: PageData;
    $: ({ request, client } = data);
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
        {request.reqnumber}
      </h4>
      <!-- {#if form?.success}
      <ToastSuccess/>
      <small style="display: none;">{window.location.reload()}</small>
      {/if} -->
  
    
  
      <div class="row">

      <!-- Create Deal Wizard -->
      <div id="wizard-create-deal" class="bs-stepper vertical mt-2">

        <div class="bs-stepper-header">

            <StepSuccess
            topclass="false"
            id="درخواست ثبت شد"
            idcaption="توسط {request.bywho}"
          />
        <div class="line"></div>
        {#if request.nextstep == 'سرپرست'}     
        <StepWarning
        id="تایید سرپرست"
        idcaption="درحال بررسی واحد مربوط"
        />
        {/if}
        {#if request.nextstep == 'مسئول' || request.nextstep == 'مدیر عامل' || request.nextstep == 'اتمام'}     
        <StepSuccess
        id="تایید سرپرست"
        idcaption="توسط {request.sarparastname}"
        />
        {/if}                

  <div class="line"></div>
  {#if request.nextstep == 'مسئول'}     
  <StepWarning
  id="تایید مسئول"
  idcaption="درحال بررسی واحد مربوط"
  />
 
  {:else if request.nextstep == 'مدیر عامل' || request.nextstep == 'اتمام'}     
  <StepSuccess
  id="تایید مسئول"
  idcaption="توسط {request.masolname}"
  />
  {:else}
  <Stepnothing
  id="تایید مسئول"
  />
  {/if}
  <div class="line"></div>
  {#if request.nextstep == 'مدیر عامل'}     
  <StepWarning
  id="تایید مدیر عامل"
  idcaption="درحال بررسی مدیر عامل"
  />
 
  {:else if request.nextstep == 'اتمام'}     
  <StepSuccess
  id="تایید مدیر عامل"
  idcaption="توسط مجید سروری"
  />
  {:else}
  <Stepnothing
  id="تایید مدیر عامل"
  />
  {/if}         
  
          </div>
        
        

  
        <div class="bs-stepper-content">
          <div class="row">
            {#if request.nextstep == 'سرپرست' }
            {#if client.parentProffesion.includes('سرپرست') || client.parentProffesion.includes('مدیر') }
            <div class="col-12">
            <button
            class="btn btn-primary col-12 btn-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tozihatkarshenasforosh"
            aria-expanded="false"
            aria-controls="tozihatkarshenasforosh"
          >
            توضیحات {request.bywho}‎ ‎ ‎
            <i class="fa-solid fa-up-right-from-square"></i>
          </button>
        
        <div class="col-12">
          <div class="collapse" id="tozihatkarshenasforosh">
            <div class="d-grid d-sm-flex p-3 border alert-primary">
              <span class="lh-2">
                {request.caption}<br>
                {#if request.type == "مرخصی - ساعتی" || request.type == "مرخصی - روزانه"}
                تاریخ شروع: 
              {request.startdate}<br>
              تاریخ پایان: 
              {request.enddate}<br>
                {/if}
              </span>
            </div>
          </div>
        </div>
        </div>
        <br>
        <br>
        <br>
            <form action="?/sarparastaccept" method="POST" use:enhance>
                <label for="label">توضیحات</label>
                <input type="text" name="caption" class="form-control">
                <br>
                <button type="submit" class="btn btn-success col-12">تایید</button>
            </form>
            {/if}
            {/if}

            {#if request.nextstep == 'مسئول'}
            {#if client.name == 'فاطمه خندانی'}
            <div class="col-12">
            <button
            class="btn btn-primary col-12 btn-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tozihatkarshenasforosh"
            aria-expanded="false"
            aria-controls="tozihatkarshenasforosh"
          >
            توضیحات {request.bywho}‎ ‎ ‎
            <i class="fa-solid fa-up-right-from-square"></i>
          </button>
        
        <div class="col-12">
          <div class="collapse" id="tozihatkarshenasforosh">
            <div class="d-grid d-sm-flex p-3 border alert-primary">
              <span class="lh-2">
                {request.caption}<br>
                {#if request.type == "مرخصی - ساعتی" || request.type == "مرخصی - روزانه"}
                تاریخ شروع: 
              {request.startdate}<br>
              تاریخ پایان: 
              {request.enddate}<br>
                {/if}
              </span>
            </div>
          </div>
        </div>
        </div>
        <br>
        <br>

        <div class="col-12">
            <button
            class="btn btn-primary col-12 btn-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tozihatesarparas"
            aria-expanded="false"
            aria-controls="tozihatesarparas"
          >
            توضیحات سرپرست {request.sarparastname}‎ ‎ ‎
            <i class="fa-solid fa-up-right-from-square"></i>
          </button>
        
        <div class="col-12">
          <div class="collapse" id="tozihatesarparas">
            <div class="d-grid d-sm-flex p-3 border alert-primary">
              <span class="lh-2">
                {request.sarparast}
              </span>
            </div>
          </div>
        </div>
        </div>
        <br>
        <br>
        <br>
            <form action="?/masolaccept" method="POST" use:enhance>
                <label for="label">توضیحات</label>
                <input type="text" name="caption" class="form-control">
                <br>
                <button type="submit" class="btn btn-success col-12">تایید</button>
            </form>
            {/if}
            {/if}
            {#if request.nextstep == 'مدیر عامل'}
            {#if client.parentProffesion == 'مدیرعامل'}
            <div class="col-12">
            <button
            class="btn btn-primary col-12 btn-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tozihatkarshenasforosh"
            aria-expanded="false"
            aria-controls="tozihatkarshenasforosh"
          >
            توضیحات {request.bywho}‎ ‎ ‎
            <i class="fa-solid fa-up-right-from-square"></i>
          </button>
        
        <div class="col-12">
          <div class="collapse" id="tozihatkarshenasforosh">
            <div class="d-grid d-sm-flex p-3 border alert-primary">
              <span class="lh-2">
                {request.caption}<br>
                {#if request.type == "مرخصی - ساعتی" || request.type == "مرخصی - روزانه"}
                تاریخ شروع: 
              {request.startdate}<br>
              تاریخ پایان: 
              {request.enddate}<br>
                {/if}
              </span>
            </div>
          </div>
        </div>
        </div>
        <br>
        <br>

        <div class="col-12">
            <button
            class="btn btn-primary col-12 btn-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tozihatesarparas"
            aria-expanded="false"
            aria-controls="tozihatesarparas"
          >
            توضیحات سرپرست {request.sarparastname}‎ ‎ ‎
            <i class="fa-solid fa-up-right-from-square"></i>
          </button>
        
        <div class="col-12">
          <div class="collapse" id="tozihatesarparas">
            <div class="d-grid d-sm-flex p-3 border alert-primary">
              <span class="lh-2">
                {request.sarparast}
              </span>
            </div>
          </div>
        </div>
        </div>
        <br>
        <br>
        
        <div class="col-12">
            <button
            class="btn btn-primary col-12 btn-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tozihatessddsarparas"
            aria-expanded="false"
            aria-controls="tozihatessddsarparas"
          >
            توضیحات مسئول {request.masolname}‎ ‎ ‎
            <i class="fa-solid fa-up-right-from-square"></i>
          </button>
        
        <div class="col-12">
          <div class="collapse" id="tozihatessddsarparas">
            <div class="d-grid d-sm-flex p-3 border alert-primary">
              <span class="lh-2">
                {request.masol}
              </span>
            </div>
          </div>
        </div>
        </div>
        <br>
        <br>
        <br>
            <form action="?/modiramelaccept" method="POST" use:enhance>
                <button type="submit" class="btn btn-success col-12">تایید</button>
            </form>
            {/if}
            {/if}

            {#if request.nextstep == 'اتمام'}
            <p class="text-center">
                <i class="fa-regular fa-circle-check text-success" style="font-size: 3rem !important;"></i><br><br>
                
            درخواست شماره {request.reqnumber} که توسط {request.bywho} با سمت {request.bywhochildprofession} مورد تایید سرپرست بخش {request.sarparastname} و همچنین مسئول بخش {request.masolname} بودند <br><span>همچنین  مورد تایید جناب اقای مجید سروری , مدیرعامل شرکت آروین فروزش رایاناب نیز میباشد</span>  
             </p>
            {/if}
          </div>
        </div>
      </div>
      <!-- /Create Deal Wizard -->
    </div>
</div>
</div>
 
  
  <!-- / Content -->