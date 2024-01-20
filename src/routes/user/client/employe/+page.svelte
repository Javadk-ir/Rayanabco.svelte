<script lang="ts">
    import type { PageData } from './$types';
    import DeleteWarningButton from '$com/DeleteWarningMessage.svelte'
    import SuccessfuleModal from '$com/successfulMessageModal.svelte'
    import ToastSuccess from '$com/Formsuccess.svelte'

    export let form;
    export let data: PageData;
    $: ({
      client,
      user,
      highPermission,
      morekhasi,
      allUsers
    } = data);
</script>


<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css">
</svelte:head>

<div class="content-wrapper">
    <!-- Content -->
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="row g-4 mb-4">
            {#if form?.success}
            <ToastSuccess/>
            {/if}
        <div class="col-sm-6 col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-start justify-content-between">
                <div class="content-left">
                  <span class="secondary-font fw-medium">کل کارکنان</span>
                  <div class="d-flex align-items-baseline mt-2">
                    <h4 class="mb-0 me-2">{allUsers}</h4>
                  </div>
                  <small>مجموع کاربران</small>
                </div>
                <span class="badge bg-label-primary rounded p-2">
                  <i class="bx bx-user bx-sm"></i>
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
                  <span class="secondary-font fw-medium">کاربران ویژه</span>
                  <div class="d-flex align-items-baseline mt-2">
                    <h4 class="mb-0 me-2">{highPermission}</h4>
                  </div>
                  <small>با دسترسی A و B </small>
                </div>
                <span class="badge bg-label-danger rounded p-2">
                    <i class="bx bx-group bx-sm"></i>
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
                  <span class="secondary-font fw-medium">مرخصی</span>
                  <div class="d-flex align-items-baseline mt-2">
                    <h4 class="mb-0 me-2">{morekhasi}</h4>
                  </div>
                  <small>کل مرخصی ها</small>
                </div>
                <span class="badge bg-label-warning rounded p-2">
                    <i class="bx bx-user-voice bx-sm"></i>
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

            <a style="margin-right: 25px" href="employe/add" class="btn btn-success">افزودن کاربر <i class='bx bx-plus'></i> </a>
            <br>
            <br>
          <table class="datatables-users table border-top">
            <thead>
              <tr>
                <th>نام</th>
                <th>نقش</th>
                <th>نام کاربری</th>
                <th>شماره تلفن</th>
                <th>عمل‌ها</th>
              </tr>
            </thead>
            <tbody>
            {#each user as users}
                <tr>
                    <td>{users.name}</td>
                    <td>{users.childProffesion}</td>
                    <td>{users.userID}</td>
                    <td>{users.phoneNumber}</td>
                    <td>
                        <a href="employe/edit/{users.name}" class="btn btn-warning"><i class='bx bx-pencil'></i></a>
                        <DeleteWarningButton id='a{Math.round(Math.random() * 1000000)}b' name="{users.name}"/></td>
                </tr>
            {/each}
            <SuccessfuleModal/>

            </tbody>
          </table>
        </div>
    <!-- / Content -->
    </div>
    </div>
    </div>
  