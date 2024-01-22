<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    $: ({
      client,
      allCity,
      allCitySells,
      golestanCity,
      otherCity,
      guilanCity,
      tehranCity,
      mazandaranCity,
      totalSuccesSells,
      totalCustomers,
      totalNumberOfCustomers,
      totalSalesAmout,
      flashDriveVariety,
      ssdVariety,
      microSDVariety,
      totalSeyedZadehSalesAmout,
      totalHamidiSalesAmout,
      orderinfo
    } = data);
  </script>
  <svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/vendor/libs/apex-charts/apex-charts.css">
  </svelte:head>
  
  <!-- Content wrapper -->
  <div class="content-wrapper">
    <!-- Content -->
  
      
    <div class="container-xxl flex-grow-1 container-p-y" >
        <div class="row">
            <div class="col-lg-12 col-md-12 col-12 mb-12">
                <div style="
                  background-image: radial-gradient(#5a8dee 1px, transparent 0);
                  background-size: 50px 50px;
                  background-position: -19px -19px;" class="card h-100">
                  <div class="card-header">
                    <h3 class="card-title mb-2">خوش اومدی</h3>
                    <span class="d-block mb-4 text-nowrap primary-font"
                      >دلمون برات تنگ شده بود!</span
                    >
                  </div>
                  <div class="card-body">
                    <div class="row align-items-end">
                      <div class="col-6">
                        <h1 class="display-6 text-primary mb-2 pt-3 pb-2">
                          {client.parentProffesion}
                        </h1>
                        <small class="d-block mb-3 lh-1-85"> {client.name}</small>
        
                        <a href="/user/shop" class="btn btn-sm btn-primary">مشاهده فروش‌ها</a>
                      </div>
                      <div class="col-6 text-center">
                        <img
                          src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/img/illustrations/prize-light.png"
                          width="190"
                          height="200"
                          class="rounded-start"
                          alt="View Sales"
                          data-app-light-img="illustrations/prize-light.png"
                          data-app-dark-img="illustrations/prize-dark.png"
                        />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            {#if client.class == 'A'}
    <div class="container-xxl flex-grow-1 container-p-y">
      <div class="row">

        <!-- All Users -->
        <div class="col-md-6 col-lg-6 col-xl-6 mb-4 mb-xl-0">
          <div class="card h-100">
            <div class="card-header">
              <h5 class="card-title mb-3">کل مشتریان</h5>
              <h1 class="display-6 fw-normal mb-0 primary-font">{allCity}</h1>
            </div>
            <div class="card-body">
              <span class="d-block mb-2">فعالیت کنونی</span>
              <div
                class="progress progress-stacked mb-3 mb-xl-5"
                style="height: 8px"
              >
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: {mazandaranCity[3]}%"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax={allCitySells}
                ></div>
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: {guilanCity[3]}%"
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax={allCitySells}
                ></div>
                <div
                  class="progress-bar bg-info"
                  role="progressbar"
                  style="width: {golestanCity[3]}%"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax={allCitySells}
                ></div>
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: {tehranCity[3]}%"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax={allCitySells}
                ></div>
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style="width: {otherCity[3]}%"
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax={allCitySells}
                ></div>
              </div>
              <ul class="p-0 m-0">
                <li class="mb-3 d-flex justify-content-between">
                  <div class="d-flex align-items-center me-3">
                    <span class="badge badge-dot bg-success me-2"></span> مازندران
                  </div>
                  <div class="d-flex gap-3">
                    <span>{mazandaranCity[2]}</span>
                    <span class="fw-semibold">{mazandaranCity[3]}%</span>
                  </div>
                </li>
                <li class="mb-3 d-flex justify-content-between">
                  <div class="d-flex align-items-center me-3">
                    <span class="badge badge-dot bg-danger me-2"></span> گیلان
                  </div>
                  <div class="d-flex gap-3">
                    <span>{guilanCity[2]}</span>
                    <span class="fw-semibold">{guilanCity[3]}%</span>
                  </div>
                </li>
                <li class="mb-3 d-flex justify-content-between">
                  <div class="d-flex align-items-center me-3">
                    <span class="badge badge-dot bg-info me-2"></span> گلستان
                  </div>
                  <div class="d-flex gap-3">
                    <span>{golestanCity[2]}</span>
                    <span class="fw-semibold">{golestanCity[3]}%</span>
                  </div>
                </li>
                <li class="mb-3 d-flex justify-content-between">
                  <div class="d-flex align-items-center me-3">
                    <span class="badge badge-dot bg-primary me-2"></span> تهران
                  </div>
                  <div class="d-flex gap-3">
                    <span>{tehranCity[2]}</span>
                    <span class="fw-semibold">{tehranCity[3]}%</span>
                  </div>
                </li>
                <li class="mb-1 d-flex justify-content-between">
                  <div class="d-flex align-items-center me-3">
                    <span class="badge badge-dot bg-warning me-2"></span> دیگر
                  </div>
                  <div class="d-flex gap-3">
                    <span>{otherCity[2]}</span>
                    <span class="fw-semibold">{otherCity[3]}%</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--/ All Users -->
  
        <!-- All Users -->
        <div class="col-md-6 col-lg-6 col-xl-6 mb-4 mb-xl-0">
          <div class="card h-100">
            <div class="card-header">
              <h5 class="card-title mb-3">سفارشات</h5>
              <h1 class="display-6 fw-normal mb-0 primary-font">
                {allCitySells}
              </h1>
            </div>
            <div class="card-body">
              <span class="d-block mb-2">فعالیت کنونی</span>
              <div
                class="progress progress-stacked mb-3 mb-xl-5"
                style="height: 8px"
              >
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: {mazandaranCity[1]}%"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: {guilanCity[1]}%"
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <div
                  class="progress-bar bg-info"
                  role="progressbar"
                  style="width: {golestanCity[1]}%"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: {tehranCity[1]}%"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style="width: {otherCity[1]}%"
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <ul class="p-0 m-0">
                <li class="mb-3 d-flex justify-content-between">
                  <div class="d-flex align-items-center me-3">
                    <span class="badge badge-dot bg-success me-2"></span> مازندران
                  </div>
                  <div class="d-flex gap-3">
                    <span>{mazandaranCity[0]}</span>
                    <span class="fw-semibold">{mazandaranCity[1]}%</span>
                  </div>
                </li>
                <li class="mb-3 d-flex justify-content-between">
                  <div class="d-flex align-items-center me-3">
                    <span class="badge badge-dot bg-danger me-2"></span> گیلان
                  </div>
                  <div class="d-flex gap-3">
                    <span>{guilanCity[0]}</span>
                    <span class="fw-semibold">{guilanCity[1]}%</span>
                  </div>
                </li>
                <li class="mb-3 d-flex justify-content-between">
                  <div class="d-flex align-items-center me-3">
                    <span class="badge badge-dot bg-info me-2"></span> گلستان
                  </div>
                  <div class="d-flex gap-3">
                    <span>{golestanCity[0]}</span>
                    <span class="fw-semibold">{golestanCity[1]}%</span>
                  </div>
                </li>
                <li class="mb-3 d-flex justify-content-between">
                  <div class="d-flex align-items-center me-3">
                    <span class="badge badge-dot bg-primary me-2"></span> تهران
                  </div>
                  <div class="d-flex gap-3">
                    <span>{tehranCity[0]}</span>
                    <span class="fw-semibold">{tehranCity[1]}%</span>
                  </div>
                </li>
                <li class="mb-1 d-flex justify-content-between">
                  <div class="d-flex align-items-center me-3">
                    <span class="badge badge-dot bg-warning me-2"></span> دیگر
                  </div>
                  <div class="d-flex gap-3">
                    <span>{otherCity[0]}</span>
                    <span class="fw-semibold">{otherCity[1]}%</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--/ All Users -->
  
        <div class="container-xxl flex-grow-1 container-p-y" style="padding-bottom: 0 !important;">
          <div class="row">
            <!-- Latest Update -->
            <div class="col-md-6 col-lg-6 col-xl-4 col-xl-4 mb-4">
              <div class="card ">
                <div
                  class="card-header d-flex align-items-center justify-content-between mb-3"
                >
                  <h5 class="card-title mb-0">لیست محصولات</h5>
                </div>
                <div class="card-body">
                  <ul class="p-0 m-0">
                    <li class="d-flex mb-3 align-items-center">
                      <div class="avatar avatar-sm flex-shrink-0 me-3">
                        <span
                          class="avatar-initial rounded-circle bg-label-primary"
                          ><i class="bx bx-cube"></i></span
                        >
                      </div>
                      <div
                        class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2"
                      >
                        <div class="me-2">
                          <p class="mb-0">مجموع محصولات</p>
                        </div>
                        <div class="item-progress">
                          {flashDriveVariety + microSDVariety + ssdVariety} مدل
                        </div>
                      </div>
                    </li>
                    <li class="d-flex mb-3 align-items-center">
                      <div class="avatar avatar-sm flex-shrink-0 me-3">
                        <span class="avatar-initial rounded-circle bg-label-info"
                          ><i class="bx bx-hdd"></i></span
                        >
                      </div>
                      <div
                        class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2"
                      >
                        <div class="me-2">
                          <p class="mb-0">هارد</p>
                        </div>
                        <div class="item-progress">{ssdVariety} مدل</div>
                      </div>
                    </li>
                    <li class="d-flex mb-3 align-items-center">
                      <div class="avatar avatar-sm flex-shrink-0 me-3">
                        <span
                          class="avatar-initial rounded-circle bg-label-danger"
                          ><i class="bx bx-memory-card"></i></span
                        >
                      </div>
                      <div
                        class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2"
                      >
                        <div class="me-2">
                          <p class="mb-0">میکرو اس دی</p>
                        </div>
                        <div class="item-progress">{microSDVariety} مدل</div>
                      </div>
                    </li>
                    <li class="d-flex align-items-center">
                      <div class="avatar avatar-sm flex-shrink-0 me-3">
                        <span
                          class="avatar-initial rounded-circle bg-label-success"
                          ><i class="fa-brands fa-usb"></i></span
                        >
                      </div>
                      <div
                        class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2"
                      >
                        <div class="me-2">
                          <p class="mb-0">فلش درایو</p>
                        </div>
                        <div class="item-progress">{flashDriveVariety} مدل</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!--/ Latest Update -->
            <div class="col-md-6 col-lg-6 col-xl-4 col-xl-4 mb-4">
              <div class="col-12 col-sm-6 col-md-12 mb-4">
                <div class="card h-100">
                  <div class="card-header">
                    <h5 class="card-title mb-2">فروشندگان برتر</h5>
                  </div>
                  <div
                    class="card-body d-flex align-items-end justify-content-between"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center gap-3 w-100 mb-1"
                    >
                      <div class="d-flex align-content-center">
                        <div
                          class="chart-report mt-n1"
                          data-color="danger"
                          data-series="25"
                        ></div>
                        <div class="chart-info">
                          <h5 class="mb-1 lh-inherit">خانم سید زاده</h5>
                          <small class="text-muted"
                            >{totalSeyedZadehSalesAmout} فاکتور</small
                          >
                        </div>
                      </div>
                      <div class="d-flex align-content-center">
                        <div
                          class="chart-report mt-n1"
                          data-color="info"
                          data-series="50"
                        ></div>
                        <div class="chart-info">
                          <h5 class="mb-1 lh-inherit">خانم حمیدی</h5>
                          <small class="text-muted"
                            >{totalHamidiSalesAmout}فاکتور </small
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex align-items-center gap-3">
                        <div class="avatar">
                          <span
                            class="avatar-initial bg-label-warning rounded-circle"
                            ><i class="bx bx-dollar fs-4"></i></span
                          >
                        </div>
                        <div class="card-info">
                          <h5 class="card-title mb-0 me-2 primary-font">
                            {Math.round(totalSalesAmout)
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </h5>
                          <small class="text-muted">درآمد</small>
                        </div>
                      </div>
                      <div id="incomeChart"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Statistics cards & Revenue Growth Chart -->
            <div class="col-lg-4 col-12">
              <div class="row">
                <!-- Statistics Cards -->
                <div class="col-6 col-md-3 col-lg-6 mb-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <div class="avatar mx-auto mb-2">
                        <span
                          class="avatar-initial rounded-circle bg-label-success"
                          ><i class="bx bx-purchase-tag fs-4"></i></span
                        >
                      </div>
                      <span class="d-block text-nowrap pt-1">خرید موفق</span>
                      <h2 class="mb-n3">{totalSuccesSells}</h2>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-md-3 col-lg-6 mb-4">
                  <div class="card h-100">
                    <div class="card-body text-center">
                      <div class="avatar mx-auto mb-2">
                        <span
                          class="avatar-initial rounded-circle bg-label-danger"
                          ><i class="bx bx-phone-call"></i></span
                        >
                      </div>
                      <span class="d-block text-nowrap pt-1">سرنخ موجود</span>
                      <h2 class="mb-n3">{totalCustomers}</h2>
                    </div>
                  </div>
                </div>
                <!-- Growth Chart-->
                <div class="col-sm-12 col-12">
                  <div class="row">
                    <div class="col-12 mb-4">
                      <div class="card h-100">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex align-items-center gap-3">
                              <div class="avatar">
                                <span
                                  class="avatar-initial bg-label-primary rounded-circle"
                                  ><i class="bx bx-user fs-4"></i></span
                                >
                              </div>
                              <div class="card-info">
                                <h5 class="card-title mb-0 me-2 primary-font">
                                  {totalNumberOfCustomers}
                                </h5>
                                <small class="text-muted">مشتری فعال</small>
                              </div>
                            </div>
                            <div id="conversationChart"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--/ Statistics Cards -->
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    {/if}
    <div class="container-xxl flex-grow-1 container-p-y" style="padding-top: 0 !important;">
        <div class="row">
        <div class="col-md-12 col-lg-12 col-xl-12 col-xl-12 mb-4">
      <!-- Basic Bootstrap Table -->
      <div class="card">
        <h5 class="card-header heading-color">سفارشات باز</h5>
        <div class="table-responsive text-nowrap">
          <table class="table">
            <thead>
              <tr>
                <th>مشتری</th>
                <th>واسط</th>
                <th>وضعیت</th>
                <th>عملبات</th>
              </tr>
            </thead>
            <tbody class="table-border-bottom-0">
              {#each orderinfo as element}
              {#if element.nextstep != 'بایگانی'}
              {#if element.submittedby == client.name || client.class == 'A' || client.class == 'B' || client.childProffesion == 'قروش - مدیر' && element.nextstep != 'اتمام' }
              <tr>
                  <td>
                      {#if element.nextstep=='انبار' }
                      <i class="align-middle fa-solid fa-truck-ramp-box text-info me-3"></i>
                      {:else if element.nextstep=='رهگیری' }
                      <i class='align-middle bx bx-mail-send text-info me-3' ></i>
                        {:else if element.nextstep=='تحویل' }
                        <i class="align-middle fa-solid fa-map-location-dot text-info me-3"></i>
                          {:else if element.nextstep=='رد شده'}
                          <i class='align-middle fa-regular fa-circle-xmark text-danger me-3'></i>
                            {:else if element.nextstep=='اپلودمالی'}
                            <i class="align-middle fa-solid fa-file-invoice text-warning me-3"></i>
                              {:else if element.nextstep=='تاییدمالی'}
                              <i class="align-middle fa-solid fa-file-invoice-dollar text-warning me-3"></i>
                                {:else if element.nextstep !='اتمام'}
                                <i class="align-middle fa-solid fa-person-military-pointing text-primary me-3"></i>
                                  {:else}
                                  <i class="align-middle fa-regular fa-circle-check text-success me-3"></i>
                                {/if}
                   <strong>{element.buyername}</strong>
                  </td>
                  <td>{element.submittedby}</td>
                  <td>                     
                      {#if element.nextstep=='مدیریت فروش' && client.childProffesion=='فروش - مدیر' }
                      <span id="badgeinfo" class="badge bg-warning me-1">
                        نیازمند بررسی شما
                      </span>
                      {:else if element.nextstep=='حسابداری' && client.parentProffesion=='حسابدار'}
                        <span id="badgeinfo" class="badge bg-warning me-1">
                          نیازمند بررسی شما
                        </span>
                        {:else if element.nextstep=='انبار' && client.parentProffesion=='انبار' }
                          <span id="badgeinfo" class="badge bg-warning me-1">
                            نیازمند بررسی شما
                          </span>
                          {:else if element.nextstep=='رهگیری' && client.parentProffesion=='انبار' }
                            <span id="badgeinfo" class="badge bg-warning me-1">
                              نیازمند بررسی شما
                            </span>
                            {:else if element.nextstep=='تحویل' && client.parentProffesion=='انبار'}
                              <span id="badgeinfo" class="badge bg-warning me-1">
                                نیازمند بررسی شما
                              </span>
                              {:else if element.nextstep=='تاییدمالی' && client.parentProffesion=='حسابدار'}
                                <span id="badgeinfo" class="badge bg-warning me-1">
                                  نیازمند بررسی شما
                                </span>
                                {:else if element.nextstep=='تاییدمالی' && client.childProffesion=='فروش - مدیر'}
                                  <span id="badgeinfo" class="badge bg-warning me-1">
                                    نیازمند بررسی شما
                                  </span>
                                  {:else if element.nextstep=='انبار' }
                                    <span id="badgeinfo" class="badge bg-info me-1">
                                      درحال بسته بندی کالا
                                    </span>
                                    {:else if element.nextstep=='رهگیری' }
                                      <span id="badgeinfo" class="badge bg-info me-1">
                                        درحال رهگیری
                                      </span>
                                      {:else if element.nextstep=='تحویل' }
                                        <span id="badgeinfo" class="badge bg-info me-1">
                                          درحال تحویل به نامه رسان
                                        </span>
                                        {:else if element.nextstep=='رد شده'}
                                          <span id="badgeinfo" class="badge bg-danger me-1">
                                            رد شد
                                          </span>
                                          {:else if element.nextstep=='اپلودمالی'}
                                            <span id="badgeinfo" class="badge bg-info me-1">
                                              نیازمند بارگذاری مدارک مالی
                                            </span>
                                            {:else if element.nextstep=='تاییدمالی'}
                                              <span class="badge bg-info me-1">
                                                درحال تایید مدارک مالی
                                              </span>
                                              {:else if element.nextstep !='اتمام'}
                                                <span id="badgeinfo" class="badge bg-info me-1">
                                                  درحال بررسی {element.nextstep}
                                                </span>
                                                {:else}
                                                  <span id="badgeinfo"
                                                    class="badge bg-success me-1">
                                                    تایید و ارسال شده
                                                  </span>
                                              {/if}</td>
                  <td>
                      <a href="/user/shop" class="btn btn-primary btn-sm btn-rounded">مشاهده</a>
                  </td>
                </tr>
              {/if}
              {/if}
  
              {/each}
  
            </tbody>
          </table>
        </div>
      </div>
      <!--/ Basic Bootstrap Table -->
    </div>
</div>
  </div>
</div>