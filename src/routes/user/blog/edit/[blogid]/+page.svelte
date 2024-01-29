<script lang="ts">
    import type { PageData } from "./$types";
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
    import Editor from '@tinymce/tinymce-svelte';
    import ToastSuccess from '$com/successfulMessageModal.svelte'

    export let form;
    export let data: PageData;
    $: ({ blog } = data);

    let value = 'Loading... <i>mybe</i>'
    import { page } from '$app/stores';
  const client = $page.data.client

      onMount(() => {
        let matn: any = document.getElementById('matn');
        matn.value = blog.matn
        value = blog.matn

      });
  
  </script>
  
  <div class="content-wrapper">
    {#if form?.success}
    <ToastSuccess/>

      <small style="display: none;">{goto('/user/blog/')}</small>
    {/if}
    <div class="row">
      <div class="col-xl">
        <div class="card mb-4">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
          </div>
          <div class="card-body">
  
              <form id="formAuthentication" class="mb-3" action="?/edit" method="POST" use:enhance>
                <input
                readonly
                type="hidden"
                class="form-control"
                id="titlemain"
                name="titlemain"
                value="{blog.title}"
              />
                  <div class="row form-group mb-4">
                    <div class="col-12">
                      <label for="title">عنوان</label>
                      <div class="input-group input-group-merge">
                        <span id="basic-icon-default-phone2" class="input-group-text"><i class="fa-solid fa-heading"></i></span>
                      <input
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"
                        value="{blog.title}"
                        placeholder="نام محصول"
                      />
                      </div>
                    </div>
                  </div>
                  <hr />
  
                  <div id="keyinfo"  class="row form-group mb-4">
                    <div class="col-10">
                      <label for="tags">تگ</label>
                      <div class="input-group input-group-merge">
                        <span id="basic-icon-default-phone2" class="input-group-text"><i class="fa-solid fa-hashtag"></i></span>
                      <input
                        type="text"
                        class="form-control"
                        id="tags"
                        name="tags"
                        value="{blog.tags}"
                      />
                      </div>
                    </div>
                    <div class="col-2">
                      <br />
                      <button id="keyinfos" class="btn btn-primary" type="button"><i class="bi bi-plus-lg"></i>فیلد جدید</button>
                    </div>
                  </div>
                  <hr />
                  <div class="row form-group mb-4">
                    <div class="col">
                      <label for="kholasematn">خلاصه متن</label>
                      <div class="input-group input-group-merge">
                        <span id="basic-icon-default-phone2" class="input-group-text"><i class="fa-solid fa-quote-right"></i></span>
                      <input
                        type="text"
                        class="form-control"
                        id="kholasematn"
                        name="kholasematn"
                        value="{blog.matnkholase}"
                      />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="row form-group mb-4">
                    <div class="col" >
                      <Editor
                      apiKey="5x1hd5fdrpfak0fklehdco0t0c28okiga6sx5zh59ht1eufj"
                      bind:value={value}
                    />
                      <input type="hidden" id="matn" name="matn" bind:value={value}>
                    </div>
                  </div>
  
                  <div class="form-group mb-4">
                    <br />
                    <button type="submit" class="btn btn-success">ثبت</button>
                    
                  </div>
                </form>

          </div>
        </div>
      </div>
    </div>
  </div>
  