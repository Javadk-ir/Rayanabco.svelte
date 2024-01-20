<script lang="ts">
    import type { PageData } from './$types';
    import WarningButton from '$com/DeleteWarningMessage.svelte'
    import SuccessfuleModal from '$com/successfulMessageModal.svelte'
    import ToastSuccess from '$com/successfulMessageModal.svelte'

    export let form;
    export let data: PageData;
    $: ({
      client,
      product
    } = data);
</script>

{#if form?.success}
<ToastSuccess/>
{/if}
<section class="px-4 pt-3" style="background-color:rgb(255, 255, 255)">
    <div class="row" >
    <div class="col-9">
    <h1 class=" fs-5 fw-bold fw-bold">مدیریت محصولات</h1>
    <p class="text-muted mt-1 fw-semibold">
        <a href="/user" class="link">خانه</a>
        <span>/ محصولات</span>
    </p>
</div>
      <div class="col-3 overflow-y-scroll">
        <br>
        <a href="/user/product/upload" class="btn btn-success w-100">محصولات <i class='bx bx-plus'></i></a>
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
                        <div class="card-text" style="text-align: center;">
                            <a href="https://rayanab.com/shop/{products.title}" target="_blank" class="btn btn-info"><i class="fa-regular fa-eye"></i></a>
                            <a href="product/edit/{products.title}" class="btn btn-warning"><i class='bx bx-pencil' ></i></a>
                            <WarningButton id='a{Math.round(Math.random() * 1000000)}b' name="{products.title}"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/each}
                  <SuccessfuleModal/>
                    <!--/ Card layout -->
                </div>
</div>