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
        <span class="text-muted fw-light">پیگیری درخواست کالا /</span>
        {request.number}
      </h4>
      {#if form?.success}
      <ToastSuccess/>
      {#if form?.url}
      <small style="display: none;">{window.open(form?.url, "_blank")}</small>
      {/if}
      <small style="display: none;">{window.location.reload()}</small>
      {/if}
  
    
  
      <div class="row">

      <!-- Create Deal Wizard -->
      <div id="wizard-create-deal" class="bs-stepper vertical mt-2">
{#if request.nextstep != 'اتمام' && request.nextstep != 'رد شده'}
        <div class="bs-stepper-header">

            <StepSuccess
            topclass="false"
            id="درخواست ثبت شد"
            idcaption="توسط {request.bywho}"
          />
        <div class="line"></div>
        {#if request.nextstep == 'فاطمه خندانی'}     
        <StepWarning
        id=" فاطمه خندانی"
        idcaption="درحال بررسی فاطمه خندانی"
        />
        {/if}
        {#if request.nextstep == 'مجید سروری' || request.nextstep == 'اتمام'}     
        <StepSuccess
        id=" فاطمه خندانی"
        idcaption="توسط فاطمه خندانی"
        />
        {/if}                
  <div class="line"></div>
  {#if request.nextstep == 'مجید سروری'}     
  <StepWarning
  id="تایید مدیر عامل"
  idcaption="درحال بررسی مجید سروری"
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
  <hr />
  <div class="step">
    <button type="button" class="btn btn-danger btn-lg col-12" data-bs-toggle="modal" data-bs-target="#DeleteModalToggle">لغو</button>

<!-- Delete Modal -->
       <div class="modal fade" id="DeleteModalToggle" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
            <div class="modal-content p-3 p-md-5">
              <div class="modal-body">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="text-center mb-4 mt-0 mt-md-n2">
                  <h3 class="secondary-font text-warning"><i class="fa-solid fa-triangle-exclamation"></i></h3>
                  <p>شما در حال لغو کردن درخواست کالا {request.number} که توسط {request.bywho} ثبت شده است میباشد </p>
                </div>
                <form id="DeleteModal" class="row " action="?/shopreject" method="POST" use:enhance>
                  <label for="rejectreasson"> لطفا دلیل خود را برای لفو کردن سفارش بنویسید</label>
                  <input type="text" name="rejectreasson" class="form-control" style="margin-bottom: 5%;" required>
                  <div class="col-6 d-grid" style="text-align: left;">
                      <a href="#close" class="btn btn-light" data-bs-dismiss="modal" aria-label="Close"> انصراف </a>
                  </div>
                  <input type="hidden" name="name" value="s">
                  <div class="col-6 d-grid" style="text-align: right;" data-bs-toggle="modal" data-bs-target="#succesfulModal">
                      <button type="submit" class="btn btn-danger"> لغو </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
<!--/ Delete Modal -->
          </div>
        </div>
{/if}
        
        

  
        <div class="bs-stepper-content">
          <div class="row">
            {#if request.nextstep == 'فاطمه خندانی' }
            {#if client.name == request.nextstep || client.class == 'A' }
            <div class="col-12">
            <div class="d-grid d-sm-flex p-3 border alert-primary">
              <span class="lh-2">
                درخواست کننده: {request.bywho}<br><br>
                تاریخ ثبت درخواست: {request.createdAt}<br><br>
                <form action="?/download" method="post" use:enhance>
                    فایل پیوست: <button class="btn btn-success btn-sm">دانلود</button>
                    <input type="hidden" name="ّFileToDownload" value="{request.caption2Image}">
                </form><br>
                انبار {request.fromwehre} نیاز دارد از انبار {request.towhere} کالا های زیر را دریافت کند

                
          <table class="table border text-center " >
            <thead>
              <tr>
                <th>نام کالا</th>
                <th>ظرفیت</th>
                <th>تعداد</th>
              </tr>
            </thead>
            <tbody>
              {#each request.units as units}
              <tr>
                  <td>
                  {units[0]}
                </td>
                <td>
                  {units[1]}
                </td>
                <td>
                  {units[2]}
                </td>
              </tr>
              {/each}
            </tbody>
            </table>
              </span>
            </div>
          </div>
  

        <br>
        <br>
        <br>
            <form action="?/first" method="POST" use:enhance>
                <label for="label">توضیحات</label>
                <input type="text" name="caption" class="form-control">
                <br>
                <button type="submit" class="btn btn-success col-12">تایید</button>
            </form>
            {/if}
            {/if}

            {#if request.nextstep == 'مجید سروری'}
            {#if client.name == request.nextstep || client.class == 'A' }            
            <div class="col-12">
                <div class="d-grid d-sm-flex p-3 border alert-primary">
                  <span class="lh-2">
                    درخواست کننده: {request.bywho}<br><br>
                    تاریخ ثبت درخواست: {request.createdAt}<br><br>
                    <form action="?/download" method="post" use:enhance>
                        فایل پیوست: <button class="btn btn-success btn-sm">دانلود</button>
                        <input type="hidden" name="ّFileToDownload" value="{request.caption2Image}">
                    </form><br>
                    انبار {request.fromwehre} نیاز دارد از انبار {request.towhere} کالا های زیر را دریافت کند
    
                    
              <table class="table border text-center " >
                <thead>
                  <tr>
                    <th>نام کالا</th>
                    <th>ظرفیت</th>
                    <th>تعداد</th>
                  </tr>
                </thead>
                <tbody>
                  {#each request.units as units}
                  <tr>
                      <td>
                      {units[0]}
                    </td>
                    <td>
                    {#if units[1] != '8' && units[1].length == 1}
                        {units[1]} ترابایت

                        {:else}
                        {units[1]} گیگابایت

                    {/if}
                    </td>
                    <td>
                      {units[2]}
                    </td>
                  </tr>
                  {/each}
                </tbody>
            </table>
                  </span>
                </div>
              </div>
        <div class="col-12">
            <br>

            <button
            class="btn btn-primary col-12 btn-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#tozihatesarparas"
            aria-expanded="false"
            aria-controls="tozihatesarparas"
          >
            توضیحات فاطمه خندانی ‎ ‎ ‎
            <i class="fa-solid fa-up-right-from-square"></i>
          </button>
        
        <div class="col-12">
          <div class="collapse" id="tozihatesarparas">
            <div class="d-grid d-sm-flex p-3 border alert-primary">
              <span class="lh-2">
                {request.info1}
              </span>
            </div>
          </div>
          <br>
          <br>
        </div>
        </div>

            <form action="?/second" method="POST" use:enhance>
                <button type="submit" class="btn btn-success col-12">تایید و نهایی کردن درخواست</button>
            </form>
            {/if}
            {/if}

            {#if request.nextstep == 'اتمام'}
            <p class="text-center">
                <i class="fa-regular fa-circle-check text-success" style="font-size: 3rem !important;"></i><br><br>
                درخواست شماره {request.number} که توسط {request.bywho} در تاریخ {request.createdAt} ثبت شده بود با موفقیت توسط تمام مسئولان و مدیر عامل تایید شد
                
                
             </p>
             <hr>
             درخواست کننده: {request.bywho}<br><br>
             تاریخ ثبت درخواست: {request.createdAt}<br><br>
             <form action="?/download" method="post" use:enhance>
                 فایل پیوست: <button class="btn btn-success btn-sm">دانلود</button>
                 <input type="hidden" name="ّFileToDownload" value="{request.caption2Image}">
             </form><br>
             انبار {request.fromwehre} نیاز دارد از انبار {request.towhere} کالا های زیر را دریافت کند

             
       <table class="table border text-center " >
         <thead>
           <tr>
             <th>نام کالا</th>
             <th>ظرفیت</th>
             <th>تعداد</th>
           </tr>
         </thead>
         <tbody>
           {#each request.units as units}
           <tr>
               <td>
               {units[0]}
             </td>
             <td>
             {#if units[1] != '8' && units[1].length == 1}
                 {units[1]} ترابایت

                 {:else}
                 {units[1]} گیگابایت

             {/if}
             </td>
             <td>
               {units[2]}
             </td>
           </tr>
           {/each}
         </tbody>
     </table>
           

            {/if}
            {#if request.nextstep == 'رد شده'}
            <p class="text-center">
                <i class="fa-regular fa-circle-xmark text-danger" style="font-size: 3rem !important;"></i><br><br>
                درخواست شماره {request.number} که توسط {request.bywho} در تاریخ {request.createdAt} ثبت شده بود  توسط {request.rejector} در تاریخ {new Intl.DateTimeFormat("fa-IR", {dateStyle: "full",timeStyle: "long",}).format(new Date(request.rejectbydate))} و به دلیل {request.rejectreasson} رد شد
                
                
             </p>
             <hr>
             درخواست کننده: {request.bywho}<br><br>
             تاریخ ثبت درخواست: {request.createdAt}<br><br>
             <form action="?/download" method="post" use:enhance>
                 فایل پیوست: <button class="btn btn-success btn-sm">دانلود</button>
                 <input type="hidden" name="ّFileToDownload" value="{request.caption2Image}">
             </form><br>
             انبار {request.fromwehre} نیاز دارد از انبار {request.towhere} کالا های زیر را دریافت کند

             
       <table class="table border text-center " >
         <thead>
           <tr>
             <th>نام کالا</th>
             <th>ظرفیت</th>
             <th>تعداد</th>
           </tr>
         </thead>
         <tbody>
           {#each request.units as units}
           <tr>
               <td>
               {units[0]}
             </td>
             <td>
             {#if units[1] != '8' && units[1].length == 1}
                 {units[1]} ترابایت

                 {:else}
                 {units[1]} گیگابایت

             {/if}
             </td>
             <td>
               {units[2]}
             </td>
           </tr>
           {/each}
         </tbody>
     </table>
           

            {/if}
          </div>
        </div>
      </div>
      <!-- /Create Deal Wizard -->
    </div>
</div>
</div>
 
  
  <!-- / Content -->