<script lang="ts">
    import type { PageData } from './$types';
    import {enhance} from '$app/forms';
    import { goto } from '$app/navigation';
    import ToastSuccess from '$com/successfulMessageModal.svelte'
    import { onMount } from 'svelte';


    export let form;
    export let data: PageData;

    $: ({client} = data);

    function morekhasi() { 

        let category: any = document.getElementById('category')
        let morekhasi: any = document.getElementById('morekhasi')
       
            if(category.value == 'مرخصی - روزانه' || category.value == 'مرخصی - ساعتی'){
                morekhasi.style.display = 'inherit'
            }else {
                morekhasi.style.display = 'none'
            }
        
    }

    import Flatpickr from 'svelte-flatpickr';
    import 'flatpickr/dist/flatpickr.css';
    import { Persian } from "flatpickr/dist/l10n/fa.js"

    let value: any, formattedValue: any;

    const options: any = {
        enableTime: true,
        locale: Persian,
        maxDate: "1402-12-31 00:00",
        mode: "range"

    };


    function handleChange(event: { detail: [any, any]; }) {
        const [ selectedDates, dateStr ] = event.detail;

    }

    function handleSubmit(event: { preventDefault: () => void; target: { elements: { [x: string]: { value: any; }; }; }; }) {
        event.preventDefault();
    }

    onMount((): any => {
      let x =document.querySelector('.flatpickr-input')as any
      x.classList.add('form-control') as any
		});


</script>


<div class="content-wrapper">
    {#if form?.success}
    <ToastSuccess/>
    <small style="display: none;">{goto('/user/requests/')}</small>
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
                        <label class="form-label" for="basic-icon-default-company">نوع</label>
                        <div class="input-group input-group-merge">
                          <span id="basic-icon-default-company2" class="input-group-text"><i class='bx bx-category' ></i></span>
                          <select on:change={morekhasi} name='category' class=" form-control" id="category">
                            <option value="متفرقه">   انتخاب کنید...</option>
                            <option value="مرخصی - ساعتی">   مرخصی - ساعتی</option>
                            <option value="مرخصی - روزانه">   مرخصی - روزانه</option>
                            <option value="ایده">   ایده</option>
                            <option value="خرید">   خرید</option>
                            <option value="متفرقه">   متفرقه</option>
                            </select>  
                        </div>
                      </div>
                      <div class="mb-3" id="morekhasi" style="display: none;" >
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label" for="basic-icon-default-company">روز و ساعت مدت مرخصی</label>
                                <div class="input-group input-group-merge">
                                    <span id="basic-icon-default-company2" class="input-group-text"><i class="fa-regular fa-calendar-plus"></i></span>
                                    <Flatpickr {options} bind:value bind:formattedValue name="date" />
                                </div>
                            </div>
                            <div class="col-6">
                              <label class="form-label" for="basic-icon-default-company">نوع درخواست</label>
                              <div class="input-group input-group-merge">
                                  <span id="basic-icon-default-company2" class="input-group-text"><i class="fa-solid fa-list"></i></span>
                                  <select name="noedarkhast" class="form-control">
                                    <option value="استحقاقی">   استحقاقی</option>
                                    <option value="استعلاجی">   استعلاجی</option>
                                    <option value="اضطراری">   اضطراری</option>
                                  </select>
                              </div>
                          </div>
                        </div>
                        
                      </div>
                      <div class="mb-3" id="caption" >
                        <label class="form-label" for="basic-icon-default-company">توضیحات</label>
                        <div class="input-group input-group-merge">
                          <span id="basic-icon-default-company2" class="input-group-text"><i class="fa-regular fa-closed-captioning"></i></span>
                          <input type="text" class="form-control" name="caption">
                        </div>
                      </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-company">اولویت</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-company2" class="input-group-text"><i class='bx bx-category' ></i></span>
                      <select name='priority' class=" form-control">
                        <option value="عادی">   انتخاب کنید...</option>
                        <option value="عادی">   عادی</option>
                        <option value="فوری">   فوری</option>
                        </select>  
                    </div>
                  </div>

<div class="mb-3">
    <button type="submit" class="btn btn-primary">ارسال</button>
  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
</div>