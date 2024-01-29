<script lang="ts">
  import type { PageData } from "./$types";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import ToastSuccess from "$com/successfulMessageModal.svelte";
  export let data: PageData;
  export let form;
  $: ({ client, orderinfo } = data);
</script>

<!-- Content wrapper -->
<div class="content-wrapper">
  <!-- Content -->
  <section class="px-4 pt-3 bg-light">
    <h1 class=" fs-5 fw-bold fw-bold">سفارشات</h1>
    <p class="text-muted mt-1 fw-semibold">
      <a href="/user" class="link">خانه</a>
      <span>/ سفارشات</span>
    </p>
  </section>
  <br />

  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
      <!-- Marketing Campaigns -->
      <div class="col-xl-12">
        {#if form?.success}
        <ToastSuccess/>
        {#if form?.url}
        <small style="display: none;">{window.open(form?.url, "_blank")}</small>
        {/if}
        <small style="display: none;">{window.location.reload()}</small>
    
        {/if}
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <h5 id="222fsefsef" class="card-title mb-0">سفارشات</h5>
              </div>
              <div class="col-6" style="text-align: left;">

                <button type="button" class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#options">سفارش گذاری</button>

                <!-- option modal - FIRST MODAL -->
                             <div class="modal fade" id="options" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
                                  <div class="modal-content p-3 p-md-5">
                                    <div class="modal-body">
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      <div class="text-center mb-4 mt-0 mt-md-n2">
                                        <br>
                                        <br>
                                        <div class="row">
                                            <div class="col-6">
                                                <button type="button" class="btn  btn-lg btn-warning" data-bs-toggle="modal" data-bs-target="#optionperson"> مشتری در CRM  ثبت نشده</button>
                                            </div>
                                            <div class="col-6">
                                                <button type="button" class="btn  btn-lg btn-warning" data-bs-toggle="modal" data-bs-target="#optionorder">قبلا اطلاعات مشتری ثبت شده </button>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                <!-- /option modal - FIRST MODAL -->

                <!-- optionperson modal - SECOND MODAL -->
                <div class="modal fade" id="optionperson" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
                      <div class="modal-content p-3 p-md-5">
                        <div class="modal-body">
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          <div class="text-center mb-4 mt-0 mt-md-n2">
                            <br>
                            <br>
                            <div class="row">
                                <div class="col-6">
                                    <a href="/user/shop/person/addpersonhaghighi" class="btn  btn-lg btn-warning" data-sveltekit-preload-data="hover" data-sveltekit-reload>شخص حقیقی است</a>
                                </div>
                                <div class="col-6">
                                    <a href="/user/shop/person/addpersonhoghoghi" class="btn  btn-lg btn-warning" data-sveltekit-preload-data="hover" data-sveltekit-reload>شخص حقوقی است </a>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    <!-- /optionperson modal - SECOND MODAL -->

                    <!-- optionorder modal - SECOND MODAL -->
                    <div class="modal fade" id="optionorder" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
                          <div class="modal-content p-3 p-md-5">
                            <div class="modal-body">
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              <div class="text-center mb-4 mt-0 mt-md-n2">
                                <br>
                                <br>
                                <div class="row">
                                    <div class="col-6">
                                        <a href="/user/shop/order/addorder" class="btn btn-lg btn-warning" data-sveltekit-preload-data="hover" data-sveltekit-reload>حواله دارم</a>
                                    </div>
                                    <div class="col-6">
                                        <button type="button" class="btn  btn-lg btn-warning" data-bs-toggle="modal" data-bs-target="#optionorderpriceclass">نیاز به ثبت حواله دارم </button>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
        <!-- /optionperson modal - SECOND MODAL -->

                            <!-- optionorderpriceclass modal - Third MODAL -->
                            <div class="modal fade" id="optionorderpriceclass" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
                                  <div class="modal-content p-3 p-md-5">
                                    <div class="modal-body">
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      <div class="text-center mb-4 mt-0 mt-md-n2">
                                        <br>
                                        <br>
                                        <div class="row">
                                            <div class="col-4">
                                                <a href="/user/shop/order/addclassorder/class-c/" class="btn  btn-lg btn-success" data-sveltekit-preload-data="hover" data-sveltekit-reload>کلاس قیمتی C</a>
                                            </div>
                                            <div class="col-4">
                                                <a href="/user/shop/order/addclassorder/class-b/" class="btn  btn-lg btn-warning" data-sveltekit-preload-data="hover" data-sveltekit-reload>کلاس قیمتی B </a>
                                            </div>
                                            <div class="col-4">
                                                <a href="/user/shop/order/addclassorder/class-a/" class="btn  btn-lg btn-danger" data-sveltekit-preload-data="hover" data-sveltekit-reload>کلاس قیمتی A </a>
                                            </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                <!-- /optionperson modal - SECOND MODAL -->
                
              </div>
            </div>
          </div>
          <table class="table border-top">
            <thead>
              <tr>
                <th>مشتری</th>
                <th>واسط</th>
                <th>مبلغ</th>
                <th>وضعیت</th>
                <th>عملبات</th>
              </tr>
            </thead>
            <tbody class="table-border-bottom-0">
              {#each orderinfo as element}
                {#if element.nextstep != "بایگانی"}
                  {#if client.class == "A" || client.class == "B" || client.isvalidclient == "true" || client.parentProffesion == "فروش" || client.parentProffesion == "انبار" || client.parentProffesion == "حسابدار"}
                    <tr>
                      <td>
                        {#if element.nextstep == "انبار"}
                          <i
                            class="align-middle fa-solid fa-truck-ramp-box text-info me-3"
                          ></i>
                        {:else if element.nextstep == "رهگیری"}
                          <i class="align-middle bx bx-mail-send text-info me-3"
                          ></i>
                        {:else if element.nextstep == "تحویل"}
                          <i
                            class="align-middle fa-solid fa-map-location-dot text-info me-3"
                          ></i>
                        {:else if element.nextstep == "رد شده"}
                          <i
                            class="align-middle fa-regular fa-circle-xmark text-danger me-3"
                          ></i>
                        {:else if element.nextstep == "اپلودمالی"}
                          <i
                            class="align-middle fa-solid fa-file-invoice text-warning me-3"
                          ></i>
                        {:else if element.nextstep == "تاییدمالی"}
                          <i
                            class="align-middle fa-solid fa-file-invoice-dollar text-warning me-3"
                          ></i>
                        {:else if element.nextstep != "اتمام"}
                          <i
                            class="align-middle fa-solid fa-person-military-pointing text-primary me-3"
                          ></i>
                        {:else}
                          <i
                            class="align-middle fa-regular fa-circle-check text-success me-3"
                          ></i>
                        {/if}
                        <strong>{element.buyername}</strong>
                      </td>
                      <td>{element.submittedby}</td>

                      {#if element.takhfif.length < 2}
                        {@const takh = element.takhfif / 100}
                        {@const takhprice =
                          element.price - element.price * takh || "0"}
                        <td>
                          {takhprice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ریال
                        </td>
                      {:else}
                        {@const takh = element.takhfif / 100}
                        {@const finalpricee = element.price - element.takhfif}
                        <td>
                          {finalpricee
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ریال
                        </td>
                      {/if}
                      <td>
                        {#if element.nextstep == "مدیریت فروش" && client.childProffesion == "فروش - مدیر"}
                          <span id="badgeinfo" class="badge bg-warning me-1">
                            نیازمند بررسی شما
                          </span>
                        {:else if element.nextstep == "حسابداری" && client.parentProffesion == "حسابدار"}
                          <span id="badgeinfo" class="badge bg-warning me-1">
                            نیازمند بررسی شما
                          </span>
                        {:else if element.nextstep == "انبار" && client.parentProffesion == "انبار"}
                          <span id="badgeinfo" class="badge bg-warning me-1">
                            نیازمند بررسی شما
                          </span>
                        {:else if element.nextstep == "رهگیری" && client.parentProffesion == "انبار"}
                          <span id="badgeinfo" class="badge bg-warning me-1">
                            نیازمند بررسی شما
                          </span>
                        {:else if element.nextstep == "تحویل" && client.parentProffesion == "انبار"}
                          <span id="badgeinfo" class="badge bg-warning me-1">
                            نیازمند بررسی شما
                          </span>
                        {:else if element.nextstep == "تاییدمالی" && client.parentProffesion == "حسابدار"}
                          <span id="badgeinfo" class="badge bg-warning me-1">
                            نیازمند بررسی شما
                          </span>
                        {:else if element.nextstep == "تاییدمالی" && client.childProffesion == "فروش - مدیر"}
                          <span id="badgeinfo" class="badge bg-warning me-1">
                            نیازمند بررسی شما
                          </span>
                        {:else if element.nextstep == "انبار"}
                          <span id="badgeinfo" class="badge bg-info me-1">
                            درحال بسته بندی کالا
                          </span>
                        {:else if element.nextstep == "رهگیری"}
                          <span id="badgeinfo" class="badge bg-info me-1">
                            درحال رهگیری
                          </span>
                        {:else if element.nextstep == "تحویل"}
                          <span id="badgeinfo" class="badge bg-info me-1">
                            درحال تحویل به نامه رسان
                          </span>
                        {:else if element.nextstep == "رد شده"}
                          <span id="badgeinfo" class="badge bg-danger me-1">
                            رد شد
                          </span>
                        {:else if element.nextstep == "اپلودمالی"}
                          <span id="badgeinfo" class="badge bg-info me-1">
                            نیازمند بارگذاری مدارک مالی
                          </span>
                        {:else if element.nextstep == "تاییدمالی"}
                          <span class="badge bg-info me-1">
                            درحال تایید مدارک مالی
                          </span>
                        {:else if element.nextstep != "اتمام"}
                          <span id="badgeinfo" class="badge bg-info me-1">
                            درحال بررسی {element.nextstep}
                          </span>
                        {:else}
                          <span id="badgeinfo" class="badge bg-success me-1">
                            تایید و ارسال شده
                          </span>
                        {/if}</td
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
                            <a
                            href="/user/shop/order/{element.ordernumber}"
                            class="btn btn-primary  dropdown-item">بررسی</a>
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            {#if element.nextstep == 'اتمام' || element.nextstep == 'رد شده'}
                            <form id="formAuthentication"  action="?/baygani" method="POST" use:enhance >
                              <input type="hidden" name="bayganiid" value="{element.ordernumber}">
                              <button class="btn btn-light  dropdown-item"  type="submit">بایگانی</button>
                            </form>
                          {/if}
                          </div>
                        </div>
                      </td>
                    </tr>
                  {/if}
                {/if}
              {/each}
            </tbody>
          </table>
        </div>
      </div>
      <!--/ Marketing Campaigns -->
    </div>
  </div>
  <!-- / Content -->
</div>
