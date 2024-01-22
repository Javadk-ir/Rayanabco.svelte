<script lang="ts">
	import { page } from '$app/stores';
  const client = $page.data.client
</script>
<!-- Navbar -->
          <nav class="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
            <div class="container-fluid">
              <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a class="nav-item nav-link px-0 me-xl-4" href="/">
                  <i class="bx bx-menu bx-sm"></i>
                </a>
              </div>

              <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                <ul class="navbar-nav flex-row align-items-center ms-auto">
                  <!-- Quick links  -->
                  <li class="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                    <a class="nav-link dropdown-toggle hide-arrow" href="/;" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                      <i class="bx bx-grid-alt bx-sm"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end py-0">
                      <div class="dropdown-menu-header border-bottom">
                        <div class="dropdown-header d-flex align-items-center py-3">
                          <h5 class="text-body mb-0 me-auto secondary-font">میانبرها</h5>
                          
                        </div>
                      </div>
                      <div class="dropdown-shortcuts-list scrollable-container">
                        <div class="row row-bordered overflow-visible g-0">
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i class='bx bx-dollar' ></i>
                            </span>
                            <a href="/user/shop" class="stretched-link">فروش</a>
                            <small class="text-muted mb-0">پیگیری سفارشات</small>
                          </div>
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i class='bx bx-envelope' ></i>
                            </span>
                            <a target="_blank" href="mailto:" class="stretched-link">ایمیل</a>
                            <small class="text-muted mb-0">اوتلوک</small>
                          </div>
                        </div>
                        <div class="row row-bordered overflow-visible g-0">
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i class='bx bxl-telegram'></i>
                            </span>
                            <a target="_blank" href="https://web.telegram.org/" class="stretched-link">تلگرام</a>
                            <small class="text-muted mb-0">تلگرام وب</small>
                          </div>
                          <div class="dropdown-shortcuts-item col">
                            <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                              <i class='bx bxl-whatsapp' ></i>
                            </span>
                            <a target="_blank" href="https://web.whatsapp.com/" class="stretched-link">واتساپ</a>
                            <small class="text-muted mb-0">واتساپ وب</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- Quick links -->


                  <!-- User -->
                  <li class="nav-item navbar-dropdown dropdown-user dropdown">
                    <a class="nav-link dropdown-toggle hide-arrow" href="/user/setting" data-bs-toggle="dropdown">
                      <div class="avatar avatar-online">
                        <img src="https://rayanabcom.storage.iran.liara.space/assest/defualt-img.png" alt="profileImage"  class="rounded-circle">
                      </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li>
                        <a class="dropdown-item" href="/user/setting">
                          <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar avatar-online">
                                <img src="https://rayanabcom.storage.iran.liara.space/assest/defualt-img.png" alt="profileImage"  class="rounded-circle">
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <span class="fw-semibold d-block">{client.name}</span>
                              <small>{client.parentProffesion}</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/user/setting">
                          <i class="bx bx-cog me-2"></i>
                          <span class="align-middle">تنظیمات</span>
                        </a>
                      </li>
                      <li>
                        <div class="dropdown-divider"></div>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/" >
                          <i class="bx bx-power-off me-2"></i>
                          <span class="align-middle">خروج</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <!--/ User -->
                </ul>
              </div>
            </div>
          </nav>