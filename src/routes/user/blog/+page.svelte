<script lang="ts">
    import type { PageData } from './$types';
    import WarningButton from '$com/DeleteWarningMessage.svelte'
    import SuccessfuleModal from '$com/successfulMessageModal.svelte'
    import ToastSuccess from '$com/successfulMessageModal.svelte'

    export let form;
    export let data: PageData;
    $: ({
      client,
      blog
    } = data);
</script>

{#if form?.success}
<ToastSuccess/>

{/if}
<section class="px-4 pt-3" style="background-color:rgb(255, 255, 255)">
    <div class="row" >
    <div class="col-9">
    <h1 class=" fs-5 fw-bold fw-bold">مدیریت بلاگ</h1>
    <p class="text-muted mt-1 fw-semibold">
        <a href="/user" class="link">خانه</a>
        <span>/ بلاگ</span>
    </p>
</div>
      <div class="col-3 overflow-y-scroll">
        <br>
        <a href="/user/blog/upload" class="btn btn-success w-100">بلاگ <i class='bx bx-plus'></i></a>
    </div>
</div>
</section>
<br>
<div class="content-wrapper">
    
                  <div class="row gy-4" >
                    <!-- Card layout -->
                    {#each blog as blogs}
                    <div class="col-sm-6 col-lg-4 h-100">
                      <div class="card">
                        <img class="card-img-top" src="https://rayanabcom.storage.iran.liara.space/blog/{blogs.images}" alt="18.jpg" height="225px">
                        <div class="card-body">
                          <h5 class="card-title">{blogs.title}</h5>
                          <p class="card-text">
                            {blogs.tarikh} - {blogs.submmitedby}
                          </p>
                        <div class="card-text" style="text-align: center;">
                            <a href="https://rayanab.com/blog/{blogs.title}" target="_blank" class="btn btn-info"><i class="fa-regular fa-eye"></i></a>
                            <a href="blog/edit/{blogs.title}" class="btn btn-warning"><i class='bx bx-pencil' ></i></a>
                            <WarningButton id='a{Math.round(Math.random() * 1000000)}b' name="{blogs.title}"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/each}
                  <SuccessfuleModal/>
                    <!--/ Card layout -->
                </div>
</div>