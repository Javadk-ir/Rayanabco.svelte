
<script lang="ts">
// @ts-nocheck

   import {enhance} from '$app/forms';
  import { goto } from '$app/navigation';
  import { error } from '@sveltejs/kit';


  export let form;

</script>
    <!-- Content -->

    <div class="authentication-wrapper authentication-cover">
        <div class="authentication-inner row m-0">
          <!-- /Left Text -->
          <div class="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center">
            <div class="flex-row text-center mx-auto">
              <img src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets//img/pages/login-light.png" alt="Auth Cover Bg color" width="520" class="img-fluid authentication-cover-img" data-app-light-img="pages/login-light.png" data-app-dark-img="pages/login-dark.png">
              <div class="mx-auto">
                <h3>به پنل مدیریتی آروین فروزش رایاناب خوش آمدید</h3>
                <p>
                    لطفا وارد حساب خود شده و ماجراجویی را شروع کنید
                </p>
              </div>
            </div>
          </div>
          <!-- /Left Text -->
  
          <!-- Login -->
          <div class="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-5 p-4">
            <div class="w-px-400 mx-auto">
              <!-- Logo -->
              {#if form?.error}
              <div class="alert alert-solid-danger alert-dismissible d-flex align-items-center" role="alert">
                <i class='bx bx-x-circle'></i>
                {form.error}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              {/if}
              {#if form?.success}
              <div class="alert alert-solid-success alert-dismissible d-flex align-items-center" role="alert">
                <i class='bx bx-check-circle'></i>
                موفقیت امیز بود! درحال انتقال ...
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <small style="display: none;">{goto('/user')}</small>
              {/if}
              <div class="app-brand mb-4">
                <a href="index.html" class="app-brand-link gap-2 mb-2">
                  <span class="app-brand-logo demo">
                  <img src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/img/favicdon.ico" class="img-fluid" alt="رایاناب">
                  </span>
                  <span class="app-brand-text demo h3 mb-0 fw-bold">CRM</span>
                </a>
              </div>
              <!-- /Logo -->
              <h4 class="mb-3 secondary-font">به رایاناب خوش آمدید!</h4>
              <p class="mb-4">لطفا وارد حساب خود شده و ماجراجویی را شروع کنید</p>
  
              <form id="formAuthentication" class="mb-3" action="?/login" method="POST" use:enhance>
                <div class="mb-3">
                  <label for="email" class="form-label">ایمیل یا نام کاربری</label>
                  <!-- svelte-ignore a11y-autofocus -->
                  <input type="text" class="form-control text-start" id="email" name="email" placeholder="ایمیل یا نام کاربری خود را وارد کنید" autofocus dir="ltr">
                </div>
                <div class="mb-3 form-password-toggle">
                  <div class="d-flex justify-content-between">
                    <label class="form-label" for="password">رمز عبور</label>

                  </div>
                  <div class="input-group input-group-merge">
                    <input type="password" id="password" class="form-control text-start" name="password" placeholder="············" aria-describedby="password" dir="ltr">
                    <span class="input-group-text cursor-pointer"><i class="bx bx-hide"></i></span>
                  </div>
                </div>
                
                <button class="btn btn-primary d-grid w-100">ورود</button>
              </form>
  

            </div>
          </div>
          <!-- /Login -->
        </div>
      </div>