<script lang="ts">
    import type { PageData } from './$types';
    import {enhance} from '$app/forms';
    import { goto } from '$app/navigation';
    import SectionSender from '$com/Form-SelectWhereSectionToSend.svelte'
    import ToastSuccess from '$com/successfulMessageModal.svelte'

    export let form;
    export let data: PageData;

    $: ({client} = data);
</script>



<div class="content-wrapper">
    {#if form?.success}
    <ToastSuccess/>
    <small style="display: none;">{goto('/user/shareFolder/')}</small>
    {/if}
    <div class="row">
        <div class="col-xl">
            <div class="card mb-4">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">لطفا اطلاعات خواسته شده را تکمیل کنید</h5>
              </div>
              <div class="card-body">
                <form id="formAuthentication" class="mb-3" action="?/upload" method="POST" use:enhance enctype='multipart/form-data'>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-fullname">اسم فایل</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-fullname2" class="input-group-text"><i class='bx bx-file-blank'></i></span>
                      <input required  type="text" class="form-control" id="filetitle" name="filetitle" placeholder="گزارش روزانه" aria-label="filetitle" aria-describedby="basic-icon-default-fullname2">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-company">دسته بندی</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-company2" class="input-group-text"><i class='bx bx-category' ></i></span>
                      <select name='category' class=" form-control">
                        <option value="متفرقه">   انتخاب کنید...</option>
                        <option value="بایگانی شده">   بایگانی شده</option>
                        <option value="اسناد">   اسناد</option>
                        <option value="بایگانی شده">   بایگانی شده</option>
                        <option value="متفرقه">   متفرقه</option>
                        </select>  
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-email">ارسال به:</label>
                    <div class="input-group input-group-merge">
                      <span class="input-group-text"><SectionSender id="{'filegoingto'}"  /></span>
                      <input name="filesentby" type="hidden" readonly value="{client.userID}">
                      <input required name="filegoingto" type="text" id="basic-icon-default-email" class="form-control text-start" placeholder="karami, sarvari, khandani,seyedzade, ..." aria-label="john.doe" aria-describedby="basic-icon-default-email2" dir="ltr">
                    </div>
                    <div class="form-text">نام کاربری شخص مقابل را بنویسید یا به بخش مورد نظر ارسال کنید</div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-phone">فایل</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-phone2" class="input-group-text"><i class='bx bxs-file-import' ></i></span>
                      <input required type="file" id="file" name="file" class="form-control phone-mask text-start" aria-label="file" aria-describedby="basic-icon-default-phone2" dir="ltr">
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">ارسال</button>
                </form>
              </div>
            </div>
          </div>
        </div>
</div>