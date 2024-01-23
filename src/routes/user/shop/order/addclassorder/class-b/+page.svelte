<script lang="ts">
    import type { PageData } from './$types';
    import { goto } from '$app/navigation';
    import ToastSuccess from '$com/successfulMessageModal.svelte'
    import { onMount } from 'svelte';
    import {enhance} from '$app/forms';
    export let form;
    export let data: PageData;
    $: ({
      client,
      product,
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

<!-- {#if form?.success}
<ToastSuccess/>
{/if} -->
<section class="px-4 pt-3 bg-light" >
    <div class="row" >
    <div class="col-9">
    <h1 class=" fs-5 fw-bold fw-bold">سفارش گذاری</h1>
    <p class="text-muted mt-1 fw-semibold">
        <a href="/user" class="link">خانه/</a>
        <a href="/user/shop" class="link">سفارشات</a>
        <span>/ کلاس قیمتی B</span>

    </p>
</div>
</div>
</section>
{#if form?.success}
<ToastSuccess/>
<small style="display: none;">{goto('/user/shop/')}</small>
{/if}
<hr>
<form id="formAuthentication" class="mb-3" action="?/upload" method="POST" use:enhance>
<section class="px-4 pt-3 bg-light">
  <div class="rounded py-3 row">
    <div class="col-md-12 row align-items-center">
      <h6 style="text-align: center;color: rgb(255, 2, 2);"><b>لطفا 3 فیلد زیر را پر کنید</b></h6><br>
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
      <div class="col-12 text-start">
        <label for="name">ㅤانتخاب مشتری</label>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a style="color: white;" data-bs-toggle="modal" data-bs-target="#searchincustomers" role="button"
        class="btn btn-secondary shadow-0 d-inline-flex align-items-center justify-content-center tool">
      انتخاب مشتریㅤ<i class="fa-solid fa-bars"></i>
        </a>
      </div>
      <div class="col-6 text-start">

        <label for="name"> تخفیف</label>
        <input required name="takhfif"  type="takhfif" id="form12" class="form-control" />

      </div>
      <div class="col-6 text-start">

            <label for="buyerinfo"> توضیحات لازم</label>
            <input required name="buyerinfo" type="buyerinfo" id="form12" class="form-control">

      </div>
      <br><br><br><br><br>
      <div class="col-12">
        <button class="btn btn-success btn-block btn-lg" type="submit">ثبت سفارش</button>
      </div>
    </div>
  </div>
  </section>
<br>
<div class="content-wrapper">
    
                  <div class="row gy-4" >
                    <!-- Card layout -->
                    {#each product as products}
                    <div class="col-sm-6 col-lg-4 h-100">
                        <div class="card">
                            <img class="card-img-top" src="https://rayanabcom.storage.iran.liara.space/mahsolat/{products.image[0]}" alt="18.jpg" height="225px">
                            <div class="card-body">
                                <h5 class="card-title">{products.title}</h5>
                                <p class="card-text">
                                    {products.category}
                                </p>
                                <div class="text-danger" style="text-align: center;">
                            {#if products.cBG16B !=undefined && products.cBG16B != null && products.cBG16B > 2}
                            <label for="16gb">16 GB</label>
                            <input name="{products.title}ظرفیت 16 گیگ,{products.cBG16B}" type="number" class="form-control"
                            min="0" max="{products.mG16B}"><br>
                            {/if}
                            {#if products.cBG32B != undefined && products.cBG32B != null && products.cBG32B > 2}
                            <label for="16gb">32 GB</label>
                            <input name="{products.title} ظرفیت 32 گیگ,{products.cBG32B}" type="number" class="form-control"
                            min="0" max="{products.mG32B}"><br>
                            {/if}
                            {#if products.cBG64B != undefined && products.cBG64B != null && products.cBG64B > 2}
                            <label for="16gb">64 GB</label>
                            <input name="{products.title}ظرفیت 64 گیگ,{products.cBG64B}" type="number" class="form-control"
                            min="0" max="{products.mG64B}"><br>
                            {/if}
                            {#if products.cBG64B != undefined && products.cBG64B != null && products.cBG64B > 2}
                            <label for="128 GB">128 GB</label>
                            <input name="{products.title}ظرفیت 128 گیگ,{products.cBG128B}" type="number" class="form-control"
                              style="float: right;" min="0" max="{products.mG128B}"><br>
                            {/if}
                            {#if products.cBG256B !=undefined && products.cBG256B != null && products.cBG256B> 2}
                            <label for="256 GB">256 GB</label>
                            <input name="{products.title}ظرفیت 256 گیگ,{products.cBG256B}" type="number" class="form-control"
                              style="float: right;" min="0" max="{products.mG256B}"><br>
                            {/if}
                            {#if products.cBG512B !=undefined && products.cBG512B != null && products.cBG512B> 2}
                            <label for="512 GB">512 GB</label>
                            <input name="{products.title} ظرفیت 512 گیگ,{products.cBG512B}" type="number" class="form-control"
                              style="float: right;" min="0" max="{products.mG512B}"><br>
                            {/if}
                            {#if products.cBT1B !=undefined && products.cBT1B != null && products.cBT1B> 2}
                            <label for="1 TB">1 TB</label>
                            <input name="{products.title}ظرفیت 1 ترابایت,{products.cBT1B}" type="number"
                              class="form-control" min="0" style="float: right;" max="{products.mT1B}"><br>
                            {/if}
                            {#if products.cBT2B !=undefined && products.cBT2B != null && products.cBT2B> 2 }
                            <label for="2 TB">2 TB</label>
                            <input name="{products.title}ظرفیت 2 ترابایت,{products.cBT2B}" type="number"
                              class="form-control" min="0" style="float: right;" max="{products.mT2B}"><br>
                            {/if}
                        </div>
                        </div>
                      </div>
                    </div>
                    {/each}
                    <!--/ Card layout -->
                </div>

                
              </div>
            </form>