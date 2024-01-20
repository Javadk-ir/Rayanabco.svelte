<script lang="ts">
  import type { PageData } from "./$types";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import { onMount } from 'svelte';
  import Editor from '@tinymce/tinymce-svelte';
  import ToastSuccess from '$com/successfulMessageModal.svelte'

  export let form;
  export let data: PageData;
  let value = '<i><strong>Meow !</strong></i>';
  $: ({ client } = data);

  
  function keyinfoo(): any {
      const name: any = document.getElementById('keyinfo')

      let col1 = document.createElement('div')
      col1.classList.add('col-6');
      col1.innerHTML = ' <input style="border: 1px solid #d3d3d3;" placeholder="(اضافه شد !)" type="text" class="form-control" id="tags" name="tags" value="" placeholder="..."/>';

      col1.style.marginTop = "10px";

      name.appendChild(col1);
    }
	onMount(() => {
      let  btn: any = document.getElementById('keyinfos')
      btn.addEventListener('click', function() {
            keyinfoo()
        });
	});

</script>

<div class="content-wrapper">
  {#if form?.success}
  <ToastSuccess/>

    <small style="display: none;">{goto("/user/blog/")}</small>
  {/if}
  <div class="row">
    <div class="col-xl">
      <div class="card mb-4">
        <div
          class="card-header d-flex justify-content-between align-items-center"
        >
        </div>
        <div class="card-body">

            <form id="formAuthentication" class="mb-3" action="?/upload" method="POST" use:enhance enctype='multipart/form-data'>

                <div class="row form-group mb-4">
                  <div class="col-12">
                    <label for="title">عنوان</label>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      name="title"
                      value=""
                      placeholder="نام محصول"
                    />
                  </div>
                </div>
                <hr />

                <div id="keyinfo"  class="row form-group mb-4">
                  <div class="col-10">
                    <label for="tags">تگ</label>
                    <input
                      type="text"
                      class="form-control"
                      id="tags"
                      name="tags"
                    />
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
                    <input
                      type="text"
                      class="form-control"
                      id="kholasematn"
                      name="kholasematn"
                    />
                  </div>
                </div>
                <hr />
                <div class="row form-group mb-4">
                  <div class="col" >
                    <Editor
                    apiKey="5x1hd5fdrpfak0fklehdco0t0c28okiga6sx5zh59ht1eufj"
                    bind:value={value}
                  />
                    <input type="hidden" name="matn" bind:value={value}>
                  </div>
                </div>
                <input type="hidden" name="sender" value="{client.name}">
                <div class="row form-group mb-4">
                  <div class="col">
                    <label for="image">عکس بلاگ ( 1 عدد)</label>
                    <input
                      accept="image/*"
                      type="file"
                      class="form-control"
                      id="image"
                      name="image"
                      required
                    />
                  </div>
                </div>

                <div class="form-group mb-4">
                  <br />
                  <button type="submit" class="btn btn-success">اشتراک گذاری</button>
                </div>
              </form>

        </div>
      </div>
    </div>
  </div>
</div>
