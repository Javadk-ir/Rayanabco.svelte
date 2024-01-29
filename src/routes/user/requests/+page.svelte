<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    $: ({
      client,
      request
    } = data);
</script>


<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css">
</svelte:head>

<div class="content-wrapper">
    <!-- Content -->
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row g-4 mb-4">
        <!-- <div class="col-sm-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-start justify-content-between">
                <div class="content-left">
                  <span class="secondary-font fw-medium">درخواست های شما</span>
                  <div class="d-flex align-items-baseline mt-2">
                    <h4 class="mb-0 me-2">000</h4>
                  </div>
                  <small>مجموع درخواست ها</small>
                </div>
                <span class="badge bg-label-primary rounded p-2">
                    <i class="fa-regular fa-hand-point-up"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-start justify-content-between">
                <div class="content-left">
                  <span class="secondary-font fw-medium">قبول شده</span>
                  <div class="d-flex align-items-baseline mt-2">
                    <h4 class="mb-0 me-2">000</h4>
                  </div>
                  <small>مجموع درخواست های قبول شده</small>
                </div>
                <span class="badge bg-label-success rounded p-2">
                    <i class="fa-solid fa-check"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-start justify-content-between">
                <div class="content-left">
                  <span class="secondary-font fw-medium">رد شده</span>
                  <div class="d-flex align-items-baseline mt-2">
                    <h4 class="mb-0 me-2">000</h4>
                  </div>
                  <small>مجموع درخواست های رد شده</small>
                </div>
                <span class="badge bg-label-danger rounded p-2">
                    <i class="fa-solid fa-x"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-start justify-content-between">
                  <div class="content-left">
                    <span class="secondary-font fw-medium">درحال بررسی</span>
                    <div class="d-flex align-items-baseline mt-2">
                      <h4 class="mb-0 me-2">000</h4>
                    </div>
                    <small>درخواست های درحال بررسی</small>
                  </div>
                  <span class="badge bg-label-warning rounded p-2">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                  </span>
                </div>
              </div>
            </div>
          </div> -->
      </div>
      <!-- Users List Table -->
      <div class="card">
        <div class="card-datatable table-responsive">
            <br>

            <a style="margin-right: 25px" href="requests/add" class="btn btn-success">درخواست جدید <i class='bx bx-plus'></i> </a>
            <br>
            <br>
          <table class="datatables-users table border-top">
            <thead>
              <tr>
                <th>موضوع درخواست</th>
                <th>توسط</th>
                <th>اولویت</th>
                <th>وضعیت</th>
                <th>عمل‌ها</th>
              </tr>
            </thead>
            <tbody>
            {#each request as requests}
                {#if requests.bywho == client.name
                || client.parentProffesion.includes('سرپرست') 
                || client.parentProffesion.includes('مدیر')
                || client.parentProffesion == 'مدیرعامل' 
                || client.name == 'فاطمه خندانی' 
                || client.class == 'A' 
                || client.class == 'B'}
                <tr>
                    <td>{requests.type}</td>
                    <td>{requests.bywho}</td>
                    <td>{#if requests.priority == 'فوری'}
                        <span id="badgeinfo" class="badge bg-danger me-1">
                            فوری
                        </span>
                    {:else}
                    <span id="badgeinfo" class="badge bg-primary me-1">
                        عادی
                    </span>
                    {/if}
                    </td>
                    <td>
                    <span id="badgeinfo" class="badge bg-info me-1">
                        درحال بررسی {requests.nextstep}
                    </span>
                    </td>
                    <td>
                        <a href="/user/requests/view/{requests.reqnumber}" class="btn btn-warning btn-sm">بررسی / مشاهده</a>
                </tr>
                {/if}
            {/each}

            </tbody>
          </table>
        </div>
    <!-- / Content -->
    </div>
    </div>
    </div>
  