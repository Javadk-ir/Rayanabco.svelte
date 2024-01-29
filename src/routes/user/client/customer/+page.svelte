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
        <div class="col-sm-12 col-xl-12">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-start justify-content-between">
                <div class="content-left">
                  <span class="secondary-font fw-medium">کل مشتریان</span>
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


      </div>
      <!-- Users List Table -->
      <div class="card">
        <div class="card-datatable table-responsive">


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
                      <div class="btn-group">
                        <button type="button" class="btn btn-primary dropdown-toggle hide-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                          ادرس پستی ‎‎
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="/user/shop/order/{users.name}/rasht/pish">ادرس رشت و پیش کرایه</a></li>
                          <li><a class="dropdown-item" href="/user/shop/order/{users.name}/rasht/pas">ادرس رشت و پس کرایه</a></li>
                          <li>
                            <hr class="dropdown-divider">
                          </li>
                          <li><a class="dropdown-item" href="/user/shop/order/{users.name}/tehran/pas">ادرس تهران و پس کرایه</a></li>
                          <li><a class="dropdown-item" href="/user/shop/order/{users.name}/tehran/pish">ادرس تهران و پیش کرایه</a></li>
                        </ul>
                      </div>
                        <a href="customer/edit/{users.name}" class="btn btn-warning"><i class='bx bx-pencil'></i></a>
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
  