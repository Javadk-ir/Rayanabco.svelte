<script lang="ts">
    import type { PageData } from './$types';
    import DeleteWarningButton from '$com/DeleteWarningMessage.svelte'
    import SuccessfuleModal from '$com/successfulMessageModal.svelte'
    import ToastSuccess from '$com/Formsuccess.svelte'

    export let form;
    export let data: PageData;
    $: ({
      client,
      units,
    } = data);
</script>


<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css">
</svelte:head>

<div class="content-wrapper">
    <!-- Content -->
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row g-4 mb-4">
        <div class="col-sm-6 col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-start justify-content-between">
                <div class="content-left">
                  <span class="secondary-font fw-medium">کل</span>
                  <div class="d-flex align-items-baseline mt-2">
                    <h4 class="mb-0 me-2">000</h4>
                  </div>
                  <small>مجموع درخواست کالا ها</small>
                </div>
                <span class="badge bg-label-primary rounded p-2">
                    <i class="fa-solid fa-border-all"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-start justify-content-between">
                <div class="content-left">
                  <span class="secondary-font fw-medium">از تهران به رشت</span>
                  <div class="d-flex align-items-baseline mt-2">
                    <h4 class="mb-0 me-2">000</h4>
                  </div>
                  <small>با دسترسی A و B </small>
                </div>
                <span class="badge bg-label-success rounded p-2">
                    <i class="fa-brands fa-buromobelexperte"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-start justify-content-between">
                <div class="content-left">
                  <span class="secondary-font fw-medium">از رشت به تهران</span>
                  <div class="d-flex align-items-baseline mt-2">
                    <h4 class="mb-0 me-2">000</h4>
                  </div>
                  <small>کل مرخصی ها</small>
                </div>
                <span class="badge bg-label-success rounded p-2">
                    <i class="fa-brands fa-buromobelexperte fa-rotate-180"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- Users List Table -->
      <div class="card">
        <div class="card-datatable table-responsive">
            <br>

            <a style="margin-right: 25px" href="requestunit/upload" class="btn btn-success">درخواست کالا <i class='bx bx-plus'></i> </a>
            <br>
            <br>
          <table class="datatables-users table border-top">
            <thead>
              <tr>
                <th>از شهر</th>
                <th>به شهر</th>
                <th>توسط</th>
                <th>تاریخ ثبت</th>
                <th>عمل‌ها</th>
              </tr>
            </thead>
            <tbody>
              {#each units as unit}
              <tr>
                  <td>
                  {unit.fromwehre}
                </td>
                <td>
                  {unit.towhere}
                </td>
                <td>
                  {unit.bywho}
                </td>
                <td>
                  {unit.createdAt}
                </td>
                <td>
                  <a href="requestunit/view/{unit.number}" class="btn btn-primary btn-sm">مشاهده بازدید</a>
                </td>
              </tr>
              {/each}
            </tbody>
          </table>
        </div>
    <!-- / Content -->
    </div>
    </div>
    </div>
  