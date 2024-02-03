<script lang="ts">
    import type { PageData } from './$types';

    import {enhance} from '$app/forms';
    import { goto } from '$app/navigation';
    import SectionSender from '$com/Form-SelectWhereSectionToSend.svelte'
    import ToastSuccess from '$com/successfulMessageModal.svelte'

    export let form;
    export let data: PageData;

    $: ({client, product} = data);
  let count = 0
    
    function myFunction() {
      // Declare variables
      var input: any, filter: any, ul: any, li: any, a: any, i: any;
      input = document.getElementById("mySearch");
      filter = input.value.toUpperCase();
      ul = document.getElementById("myMenu");
      li = ul.getElementsByTagName("div");
      console.log(li)
      // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('label')[0];
        console.log(a)
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }
    function productselect(product: string, id: string) {
        let y: any = document.getElementById(id)
        let x: any = document.getElementById('productslist')
        if(y.checked){
            let x: any = document.getElementById('productslist')
            let col: any = document.createElement('div')
            col.classList.add('mb-3');
            col.classList.add(id as string);
            col.innerHTML = `<div class="row"><div class="col-4"><label class="form-label" for="basic-icon-default-email">کالا</label><div class="input-group input-group-merge"><input name="unit${count}" readonly type="text" id="basic-icon-default-email" class="form-control text-start" value="${product}" aria-describedby="basic-icon-default-email2" ></div></div><div class="col-4"><label class="form-label" for="basic-icon-default-email">ظرفیت</label><div class="input-group input-group-merge"><select name="unit${count}" class="form-control"><option value="16">8 گیگ</option><option value="16">16 گیگ</option><option value="16">32 گیگ</option><option value="16">64 گیگ</option><option value="16">128 گیگ</option><option value="16">256 گیگ</option><option value="16">512 گیگ</option><option value="16">1 ترابایت</option><option value="16">2 ترابایت</option></select></div></div><div class="col-4"><label class="form-label" for="basic-icon-default-email">تعداد</label><div class="input-group input-group-merge"><input name="unit${count}" type="number" id="basic-icon-default-email" class="form-control text-start" aria-describedby="basic-icon-default-email2" ></div></div></div>`
            x.appendChild(col);
            count = count + 1;
        }else{
            let b: any = document.querySelector(`.${id}`)
            b.remove()
            count = count - 1;
        }
    }

</script>



<div class="content-wrapper">
    {#if form?.success}
    <ToastSuccess/>
    <small style="display: none;">{goto('/user/technical/requestunit/')}</small>
    {/if}
    <div class="row">
        <div class="col-xl">
            <div class="card mb-4">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">لطفا اطلاعات خواسته شده را تکمیل کنید</h5>
              </div>
              <div class="card-body">
                <form id="formAuthentication" class="mb-3" action="?/upload" method="POST" use:enhance enctype='multipart/form-data'>
                  <input type="hidden" name="counter" value="{count}">
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-fullname">از انبار</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-fullname2" class="input-group-text"><i class='bx bx-file-blank'></i></span>
                      <select name="fromwhere" class="form-control" >
                        <option value="تهران">   تهران</option>
                        <option value="رشت">   رشت</option>
                      </select>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-fullname">به انبار</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-fullname2" class="input-group-text"><i class='bx bx-file-blank'></i></span>
                      <select name="towhere" class="form-control">
                        <option value="تهران">   تهران</option>
                        <option value="رشت">   رشت</option>
                      </select>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-email">توضیحات</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-fullname2" class="input-group-text"><i class='bx bx-file-blank'></i></span>

                      <input name="caption" type="text" id="basic-icon-default-email" class="form-control text-start" placeholder="علت درخواست, توضیحات و ..." aria-describedby="basic-icon-default-email2" >
                    </div>
                  </div>
                  <hr>
                  <div class="mb-3">

                  <!-- svelte-ignore a11y-missing-attribute -->
                  <a style="color: white;" data-bs-toggle="modal" data-bs-target="#searchincustomers" role="button"
                  class="btn btn-primary shadow-0 d-inline-flex align-items-center justify-content-center tool">
                    افزودن کالا   <i class="fa-solid fa-plus"></i>
                    </a>
                  <div class="modal" id="searchincustomers" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
                      <div class="modal-content p-3 p-md-5">
                        <div class="modal-body">
                            <input id="mySearch" placeholder="جستجو در کالا ها" on:keyup={() => myFunction()} class="form-control"  type="text" />
                            <div id="myMenu">
                                {#each product as products, index}
                                {#if products.title != undefined}
                                {@const id = 'productselect'+index}
                                    <div class="form-check">
                                      <input on:change={() => productselect(products.title, id)}  value="{products.title}" class="form-check-input" type="checkbox" name="name" id="{id}">
                                      <label class="form-check-label" for="flexRadioDefault1">
                                        {products.title}
                                      </label>
                                    </div>
                                {/if}
                                {/each}
                              </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3" id="productslist">

                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-email">توضیحات</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-fullname2" class="input-group-text"><i class='bx bx-file-blank'></i></span>

                      <input name="caption2 " type="text" id="basic-icon-default-email" class="form-control text-start" placeholder="علت درخواست, توضیحات و ..." aria-describedby="basic-icon-default-email2" >
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-phone">پیوست</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-phone2" class="input-group-text"><i class='bx bxs-file-import' ></i></span>
                      <input required type="file" id="file" name="file" class="form-control phone-mask text-start" aria-label="file" aria-describedby="basic-icon-default-phone2" dir="ltr">
                    </div>
                  </div>
                  <button type="submit" class="btn btn-success">ثبت</button>
                </form>
              </div>
            </div>
          </div>
        </div>
</div>