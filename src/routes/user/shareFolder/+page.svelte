<script lang="ts">
    import type { PageData } from "./$types";
    import {enhance} from '$app/forms';
    import { goto } from '$app/navigation';
    import ToastSuccess from '$com/successfulMessageModal.svelte'
    export let form;

    export let data: PageData;
    $: ({
      client,
      fileshare,
      fileInbox,
      fileOutbox,
    } = data);
    

    // B's, KB's, MB's, GB's, Convertor
    function formatBytes(bytes: any, decimals: any = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['بایت', 'کیلوبایت', 'مگابایت', 'گیگابایت', 'ترابایت']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

</script>

<!-- Content wrapper -->
<div class="content-wrapper">
  <!-- Content -->
  <section class="px-4 pt-3 " >
    <h1 class=" fs-5 fw-bold fw-bold">مدیریت فایل</h1>
    <p class="text-muted mt-1 fw-semibold">
        <a href="/user" class="link">خانه</a>
        <span>/ پوشه اشتراک</span>
    </p>
    </section>
  <br>
  
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      
      <!-- Marketing Campaigns -->
      <div class="col-xl-12">
        {#if form?.success}
        <ToastSuccess/>
        {#if form?.url}
        <small style="display: none;">{window.location.href = form?.url}</small>
        {/if}
        <small style="display: none;">{window.location.reload()}</small>
        {/if}
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
          
            <h5 id="222fsefsef" class="card-title mb-0">پوشه اشتراک</h5>

          </div>
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div class="d-flex justify-content-between align-content-center flex-wrap gap-4">
                <div class="d-flex align-items-center gap-2">
                  <span></span>
                  <div>
                    <div class="d-flex align-items-center">
                      <h6 class="mb-0 me-2">فایل دریافتی:</h6>
                      <span class="text-success">{fileOutbox}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="badge badge-dot bg-success me-2"></span> اخرین
                      اپدیت: دقایقی پیش
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <span></span>
                  <div>
                    <div class="d-flex align-items-center">
                      <h6 class="mb-0 me-2">فایل ارسالی:</h6>
                      <span class="text-danger">{fileInbox}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <span class="badge badge-dot bg-danger me-2"></span> اخرین
                      اپدیت: دقایقی پیش
                    </div>
                  </div>
                </div>
              </div>
              <a href="/user/shareFolder/upload" class="btn btn-sm btn-primary"
                >اشتراک گذاری <i class="bx bx-plus"></i></a
              >
            </div>
          </div>
          <div class="">
            <table class="table border-top">
              <thead>
                <tr>
                  <th>فایل</th>
                  <th>توسط</th>
                  <th>تاریخ</th>
                  <th>حجم</th>
                  <th>عملبات</th>
                </tr>
              </thead>
              <tbody class="table-border-bottom-0">
                {#each fileshare as file}
                {#if file.filegoingto == client.userID || file.filesentby == client.userID}
                  <tr>
                    <td class="text-nowrap">
                      {#if file.filename.includes(".xls") || file.filename.includes(".xlsx")}
                        <i
                          style="color: green;"
                          class="fa-regular fa-file-excel"
                        ></i>
                      {/if}
                      {#if file.filename.includes(".doc") || file.filename.includes(".docx")}
                        <i style="color: blue;" class="fa-regular fa-file-word"
                        ></i>>
                      {/if}
                      {#if file.filename.includes(".pdf")}
                        <i style="color: red;" class="fa-regular fa-file-pdf"
                        ></i>
                      {/if}
                      {#if file.filename.includes(".csv")}
                        <i style="color: green;" class="fa-solid fa-file-csv"
                        ></i>
                      {/if}
                      {#if file.filename.includes(".png") || file.filename.includes(".jpg") || file.filename.includes(".ico") || file.filename.includes(".jpeg") || file.filename.includes(".svg")}
                        <i style="color: blue;" class="fa-regular fa-file-image"
                        ></i>
                      {/if}
                      {file.filetitle}
                    </td>
                    <td class="text-nowrap">{file.filesentby}</td>
                    <td>{file.createdAt}</td>
                    <td
                      ><span class="text-success"
                        >{formatBytes(Number(file.filesize))}</span
                      ></td
                    >
                    <td>
                      <div class="dropdown">
                        <button
                          class="btn p-0"
                          type="button"
                          id="action1"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          <i class="bx bx-dots-vertical-rounded"></i>
                        </button>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div
                          class="dropdown-menu dropdown-menu-end"
                          aria-labelledby="action1">
                          
                          <!-- svelte-ignore a11y-no-static-element-interactions -->
                          <form id="formAuthentication" class="mb-3" action="?/download" method="POST" use:enhance >
                            <input type="hidden" name="ّFileToDownload" value="{file.filepath}">
                            <button class="dropdown-item"  type="submit">دانلود</button>
                            </form>
                {#if file.filesentby == client.userID}
                <form id="formAuthentication" class="mb-3" action="?/delete" method="POST" use:enhance >
                  <input type="hidden" name="FileToDelete" value="{file.filepath}">
                  <button class="dropdown-item"  type="submit">حذف</button>
                  </form>
                  {/if}
                        </div>
                      </div>
                    </td>
                  </tr>
                {/if}

                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!--/ Marketing Campaigns -->
    </div>
  </div>
  <!-- / Content -->
</div>
