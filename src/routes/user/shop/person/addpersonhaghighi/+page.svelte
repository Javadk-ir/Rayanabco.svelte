<script lang="ts">
    import {enhance} from '$app/forms';
    import { goto } from '$app/navigation';
    import ToastSuccess from '$com/successfulMessageModal.svelte'
    export let form;
</script>

    {#if form?.success}
    <ToastSuccess/>
    <small style="display: none;">{goto('/user/shop/')}</small>
    {/if}


<div class="content-wrapper">
      <div class="row">
        <div class="card mb-4">
            <div class="card-head">
                <section class="p-2 px-4 pt-3">

                    <h1 class="fs-5 fw-bold fw-bold">ثبت پرونده شخص حقیقی</h1>
                    <p class="text-muted mt-1 fw-semibold">
                      <a href="/homepage" class="link">خانه</a>
                      <span>/</span>
                      <a href="/shop" class="link"> سفارش </a>
                      <span>/ شخص حقیقی</span>
              
                    </p>
                </section>
            </div>
            <div class="card-body">

            <form class="mb-3" action="?/upload" method="POST" use:enhance enctype='multipart/form-data'>
            <div class="row form-group mb-4">
              <div class="col">
                <label for="ejarename">کپی سند مالکیت یا اجاره نامه رسمی  </label>
                <input accept=".jpg, .jpeg, .png, .zip, .pdf, .docx" type="file" class="form-control" id="ejarename"
                  name="ejarename" value="" placeholder=""/>
              </div>

              <div class="col">
                <label for="parvaneh">کپی  پروانه کسب <span class="text-danger">*</span> </label>
                <input accept=".jpg, .jpeg, .png, .zip, .pdf, .docx" type="file" class="form-control" id="parvaneh"
                  name="parvaneh" value="" placeholder="" required/>
              </div>
            </div>
            <div class="row form-group mb-4">
                <div class="col">
                  <label for="shenasname">کپی تمامی صفحات شناسنامه </label>
                  <input accept=".jpg, .jpeg, .png, .zip, .pdf, .docx" type="file" class="form-control" id="shenasname"
                    name="shenasname" value="" placeholder=""/>
                </div>
  
                <div class="col">
                  <label for="govvahimahzari">اصل گواهی امضا محضری دارنده پروانه کسب</label>
                  <input accept=".jpg, .jpeg, .png, .zip, .pdf, .docx" type="file" class="form-control" id="govvahimahzari"
                    name="govvahimahzari" value="" placeholder=""/>
                </div>
              </div>
              <div class="row form-group mb-4">
                <div class="col">
                  <label for="cartmeli">کپی کارت ملی </label>
                  <input accept=".jpg, .jpeg, .png, .zip, .pdf, .docx" type="file" class="form-control" id="cartmeli"
                    name="cartmeli" value="" placeholder=""/>
                </div>
                <div class="col">
                  <label for="cartmelineveshte">کد ملی <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="cartmelineveshte" id="cartmelineveshte" placeholder="" required>
                  
                </div>
                <div class="col">
                  <label for="shomareeghtesadi">شماره اقتصادی <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="shomareeghtesadi" id="shomareeghtesadi" placeholder="" required>
                </div>

              </div>

            <div class="row form-group mb-4">
              <div class="col">
                <label for="info">آدرس کامل به همراه کد پستی و شماره تماس <span class="text-danger">*</span></label>
                <textarea class="form-control" name="info" id="info" placeholder=""></textarea>
              </div>
            </div>
            <hr>
            
            <h5 style="text-align: center;">اطلاعات پستی</h5>
            <br>
            <div class="row form-group mb-4">
                <div class="col">
                  <label for="companyname">نام شرکت فروشگاه <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="companyname" id="companyname" placeholder="" required>
                </div>
                <div class="col">
                    <label for="namecompany">نام و نام خانوادگی <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name="namecompany" id="namecompany" placeholder="" required>
                  </div>
                  <div class="col">
                    <label for="city">استان: <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name="city" id="city" placeholder="" required>
                  </div>
              </div>
              <div class="row form-group mb-4">
                <div class="col">
                  <label for="postcode">کد پستی <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="postcode" id="postcode" placeholder="" required>
                </div>
                <div class="col">
                    <label for="resphonenumber">شماره تماس جهت هماهنگی ارسال بار <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" name="resphonenumber" id="resphonenumber" placeholder="" required>
                  </div>
              </div>
              <div class="row form-group mb-4">
                <div class="col">
                  <label for="addressbar">ادرس ارسال بار <span class="text-danger">*</span></label>
                  <textarea class="form-control" name="addressbar" id="addressbar" placeholder="" required></textarea>
                </div>
              </div>
              <div class="row form-group mb-4">
                <div class="col">
                    <h6 style="text-align: center;">شیوه ارسال کالا روش های زیر امکان پذیر است</h6>
                    <br>
                    <div class="table-responsive">
                        <table class="table table-striped table-sm">
                            <tbody style="border: 1px solid black;">
                                <tr  class=" align-middle">
                                    <td style="border: 1px solid black;text-align: center;">باربری</td>
                                    <td style="border: 1px solid black;text-align: center;">چاپار</td>
                                    <td style="border: 1px solid black;text-align: center;">تیباکس</td>
                                    <td style="border: 1px solid black;text-align: center;">سیر و سفر</td>
                                </tr>
                              </tbody>
                        </table>
                    </div>
                    
                </div>
              </div>
              <div class="row form-group mb-4">
                <div class="col">
                  <label for="sentoption1">شبوه ارسال <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="sentoption1" id="sentoption1" placeholder="شیوه ارسال اول" required>
                </div>
                <div class="col">
                    <label for="sentoptioncaption1">توضیحات</label>
                    <input type="text" class="form-control" name="sentoptioncaption1" id="sentoptioncaption1" placeholder=" ">
                  </div>
              </div>
              <div class="row form-group mb-4">
                <div class="col">
                  <label for="sentoption2">شبوه ارسال <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="sentoption2" id="sentoption2" placeholder="شیوه ارسال دوم" required>
                </div>
                <div class="col">
                    <label for="sentoptioncaption2">توضیحات </label>
                    <input type="text" class="form-control" name="sentoptioncaption2" id="sentoptioncaption2" placeholder="">
                  </div>
              </div>
              <div class="row form-group mb-4">
                <div class="col">
                  <label for="sentoption3">شبوه ارسال <span class="text-danger">*</span></label>
                  <input type="text" class="form-control" name="sentoption3" id="sentoption3" placeholder="شیوه ارسال سوم" required>
                </div>
                <div class="col">
                    <label for="sentoptioncaption3">توضیحات</label>
                    <input type="text" class="form-control" name="sentoptioncaption3" id="sentoptioncaption3" placeholder="">
                  </div>
              </div>
              
            <hr>
            <h5 style="text-align: center;">ساخت حساب کاربری</h5><br>
            
      <div class="row form-group mb-4">
        <div class="col">
          <label for="name"> نام کامل <span  class="text-danger">*</span></label>
          <input required type="text" class="form-control" id="name" name="name"  />
        </div>
        <div class="col">
          <label for="email"> ایمیل <span  class="text-danger">*</span></label>
          <input required type="text" class="form-control" id="email" name="email"  />
        </div>
        <div class="col">
          <label for="password"> رمز عبور <span  class="text-danger">*</span></label>
          <input  required type="text" class="form-control" id="password" name="password" placeholder="********" />
        </div>
      </div>

      <div class="row form-group mb-4">
        <div class="col">
          <label for="userID">: نام کاربری <span  class="text-danger">*</span></label>
          <input required type="text" class="form-control" id="userID" name="userID"  placeholder="به انگلیسی فامیلی شخص نوشته شود" />
        </div>
        <div class="col">
          <label for="phoneNumber"> شماره تماس <span class="text-danger">(حتما با 0 اول شماره)</span></label>
          <input required type="text" class="form-control" id="phoneNumber" name="phoneNumber"  />
        </div>
      </div>

      <div class="form-group mb-4">
        <button data-mdb-toggle="modal" data-mdb-target="#uploading"  type="submit" class="btn btn-primary">ثبت اطلاعات</button>
      </div>
        </div>
      </div>
    </div>
</div>
