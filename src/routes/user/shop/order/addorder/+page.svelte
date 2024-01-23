
<script lang="ts">
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    import {enhance} from '$app/forms';
    import { goto } from '$app/navigation';
    import ToastSuccess from '$com/successfulMessageModal.svelte'
    export let form;
    export let data: PageData;
    $: ({
        client,
        customer
    } = data);


    
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

	onMount(() => {
        document.addEventListener('keyup', function(e) {
            myFunction()
        })
	});

</script>



<div class="content-wrapper">
    
    {#if form?.success}
    <ToastSuccess/>
    <small style="display: none;">{goto('/user/shop/')}</small>
    {/if}
    <div class="row">
        <div class="col-xl">
            <div class="card mb-4">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">لطفا اطلاعات خواسته شده را تکمیل کنید</h5>
              </div>
              <div class="card-body">
                <form id="formAuthentication" class="mb-3" action="?/upload" method="POST" use:enhance enctype='multipart/form-data'>
                    <div class="modal" id="searchincustomers" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
                          <div class="modal-content p-3 p-md-5">
                            <div class="modal-body">
                                <input id="mySearch" class="form-control"  type="text" />
                                <div id="myMenu">
                                    {#each customer as customers}
                                    {#if customers.name != undefined}
                                        <div class="form-check">
                                          <input value="{customers.name}" class="form-check-input" type="radio" name="name" id="flexRadioDefault1">
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            {customers.name}
                                          </label>
                                        </div>
                                    {/if}
                                    {/each}
                                  </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  <div class="mb-3">
                    <label class="form-label" for="basic-icon-default-fullname">مشتری</label>
                    <div class="input-group input-group-merge">
                      <span id="basic-icon-default-fullname2" class="input-group-text"><i class="fa-regular fa-user"></i></span>
                      <!-- svelte-ignore a11y-missing-attribute -->
                      <a style="color: white;" data-bs-toggle="modal" data-bs-target="#searchincustomers" role="button"
                      class="btn btn-secondary shadow-0 d-inline-flex align-items-center justify-content-center tool">
                   ㅤانتخاب مشتری<i class="fa-solid fa-bars"></i>
                  </a>
                    </div>
                    </div>
                    <br>
                    <div class="mb-3">
                        <label class="form-label" for="basic-icon-default-fullname">توضیحات</label>
                        <div class="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" class="input-group-text"><i class="fa-solid fa-paragraph"></i></span>
                          <input required  type="text" class="form-control" id="buyerinfo" name="buyerinfo" placeholder="توضیحات, نام, اطلاعات مفید..." aria-label="buyerinfo" aria-describedby="basic-icon-default-fullname2">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="basic-icon-default-fullname">ارزش سفارش</label>
                        <div class="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" class="input-group-text"><i class="fa-solid fa-dollar-sign"></i></span>
                          <input required  type="number" class="form-control" id="price" name="price" placeholder="حتما به ریال نوشته شود" aria-label="price" aria-describedby="basic-icon-default-fullname2">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="basic-icon-default-fullname">تخفیف</label>
                        <div class="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" class="input-group-text"><i class="fa-solid fa-percent"></i></span>
                          <input required  type="number" class="form-control" id="takhfif" name="takhfif" placeholder="اگر سفارش تخفیف ندارد 0 بنویسید" aria-label="takhfif" aria-describedby="basic-icon-default-fullname2">
                        </div>
                    </div>
                    <hr>
                    <div class="mb-3">
                        <label class="form-label" for="basic-icon-default-fullname">پیش فاکتور ها</label>
                    <div class="input-group input-group-merge">
                        <div class="row">
                            <div class="col-6">
                                <input type="file" class="form-control" id="pishfactor" name="pishfactor"><br>
                            </div>
                            <div class="col-6">
                                <input type="file" class="form-control" id="pishfactor1" name="pishfactor1"><br>
                            </div>
                            <div class="col-6">
                                <input type="file" class="form-control" id="pishfactor2" name="pishfactor2"><br>
                            </div>
                            <div class="col-6">
                                <input type="file" class="form-control" id="pishfactor3" name="pishfactor3">
                            </div>
                        </div>
                </div>    
                </div>  
                  <button type="submit" class="btn btn-primary">ارسال</button>
                </form>
              </div>
            </div>
          </div>
        </div>
</div>