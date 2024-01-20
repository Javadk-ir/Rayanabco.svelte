<script lang="ts">
    import type { PageData } from './$types';
    import {enhance} from '$app/forms';
    import { goto } from '$app/navigation';
    import ToastSuccess from '$com/successfulMessageModal.svelte'

    export let form;
    export let data: PageData;

    $: ({user, password} = data);

</script>



<div class="content-wrapper">
    {#if form?.success}
    <ToastSuccess/>
    <small style="display: none;">{goto('/user/client/employe')}</small>
    {/if}
    <div class="row">
        <div class="col-xl">
            <div class="card mb-4">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">لطفا اطلاعات خواسته شده را تکمیل کنید</h5>
              </div>
              <div class="card-body">
                <form id="formAuthentication" class="mb-3" action="?/edit" method="POST" use:enhance>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-fullname">نام کامل</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-fullname2" class="input-group-text"><i class="fa-regular fa-user"></i></span>
                      <input required  type="text" class="form-control" id="name" name="name" value="{user.name}" aria-label="name" aria-describedby="basic-icon-default-fullname2">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-company">ایمیل</label>
                    <div class="input-group input-group-merge">
                        <span id="basic-icon-default-fullname2" class="input-group-text"><i class="fa-solid fa-at"></i></span>
                        <input required  type="text" class="form-control" id="email" name="email" value="{user.email}" aria-label="email" aria-describedby="basic-icon-default-fullname2">
                      </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-email">پسورد</label>
                    <div class="input-group input-group-merge">
                        <span id="basic-icon-default-fullname2" class="input-group-text"><i class="fa-solid fa-key"></i></span>
                        <input required  type="text" class="form-control" id="password" name="password" value="{password}" aria-label="password" aria-describedby="basic-icon-default-fullname2">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-email">نام کاربری</label>
                    <div class="input-group input-group-merge">
                        <span id="basic-icon-default-fullname2" class="input-group-text"><i class="fa-solid fa-id-card-clip"></i></span>
                        <input required  type="text" class="form-control" id="userID" name="userID" value=" {user.userID}" aria-label="userID" aria-describedby="basic-icon-default-fullname2">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-email">شماره تماس</label>
                    <div class="input-group input-group-merge">
                        <span id="basic-icon-default-fullname2" class="input-group-text"><i class="fa-solid fa-phone"></i></span>
                        <input required  type="text" class="form-control" id="phoneNumber" name="phoneNumber" value="{user.phoneNumber}" aria-label="userID" aria-describedby="basic-icon-default-fullname2">
                    </div>
                  </div>
                  <div class="row form-group mb-4">
                    <div class="col">
                      <label for="class">سطح کاربر</label>

                   
                      <select required class="form-control" name="class" id="class" placeholder="">
                        <option value="{user.class}">{user.class}</option>
                        <option value="A">دسترسی بالا - A</option>
                        <option value="B">دسترسی متوسط - B</option>
                        <option value="C">دسترسی پایین - C</option>
                        <option value="D">بدون دسترسی - D</option>
                      </select>
                      
                    </div>
                    <div class="col">
                      <label for="parentProffesion">گروه شغلی</label>

            
                      <select required class="form-control" name="parentProffesion" id="parentProffesion" placeholder="">
                        <option value="{user.parentProffesion}">{user.parentProffesion}</option>
                        <option value="حسابدار">حسابدار</option>
                        <option value="فروش">فروش</option>
                        <option value="خدمات پس از فروش">خدمات پس از فروش</option>
                        <option value="بازرگانی">بازرگانی</option>
                        <option value="انبار">انبار</option>
                        <option value="مشتری">مشتری</option>
            
                      </select>
                     
            
                    </div>
            
                    <div class="col">
                      <label for="childProffesion">سمت شغلی</label>

                      <select required class="form-control" name="childProffesion" id="childProffesion" placeholder="">
                        <option value="{user.childProffesion}">{user.childProffesion}</option>
                        <option value="حسابدار - مدیر مالی">حسابدار - مدیر مالی</option>
                        <option value="حسابدار - سرپرست مالی">
                          حسابدار - سرپرست مالی
                        </option>
                        <option value="حسابدار - ارشد">حسابدار - ارشد</option>
                        <option value="حسابدار - کارشناس">حسابدار - کارشناس</option>
            
                        <optgroup label="______________">
                          <option value="فروش - مدیر">فروش - مدیر</option>
                          <option value="فروش - سرپرست">فروش - سرپرست</option>
                          <option value="فروش - کارشناس">فروش - کارشناس</option>
                        </optgroup>
            
                        <optgroup label="______________">
                          <option value="خدمات پس از فروش - مدیر">
                            خدمات پس از فروش - مدیر
                          </option>
                          <option value="خدمات پس از فروش - سرپرست">
                            خدمات پس از فروش - سرپرست
                          </option>
                          <option value="خدمات پس از فروش - تکنسین">
                            خدمات پس از فروش - تکنسین
                          </option>
                          <option value="خدمات پس از فروش - کارشناس">
                            خدمات پس از فروش - کارشناس
                          </option>
                        </optgroup>
            
                        <optgroup label="______________">
                          <option value="بازرگانی - مدیر">بازرگانی - مدیر</option>
                          <option value="بازرگانی - سرپرست">بازرگانی - سرپرست</option>
                          <option value="بازرگانی - کارشناس">بازرگانی - کارشناس</option>
                        </optgroup>
            
                        <optgroup label="______________">
                          <option value="انبار - مدیر">انبار - مدیر</option>
                          <option value="انبار - سرپرست">انبار - سرپرست</option>
                          <option value="انبار - مسئول">انبار - مسئول</option>
                        </optgroup>
                        <optgroup label="______________">
                          <option value="مشتری">مشتری</option>
                        </optgroup>
                      </select>
                    
            
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">ارسال</button>
                </form>
              </div>
            </div>
          </div>
        </div>
</div>