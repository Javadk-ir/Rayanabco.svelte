<script lang="ts">
	import { page } from '$app/stores';
  const client = $page.data.client
</script>
<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
  <div class="app-brand demo">
    <a href="/" class="app-brand-link">
      <span class="app-brand-logo demo">    
      </span>
      <span class="app-brand-text demo menu-text fw-bold ms-2">رایاناب</span>
    </a>

    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="layout-menu-toggle menu-link text-large ms-auto">
      <i class="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
      <i class="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
    </a>
  </div>

  <div class="menu-divider mt-0"></div>

  <div class="menu-inner-shadow"></div>

  <ul class="menu-inner py-1">
    <!-- Page -->
    <li class="menu-item active">
      <a data-sveltekit-preload-data="hover" href="/user" class="menu-link">
        <i class="menu-icon tf-icons bx bx-home-circle"></i>
        <div data-i18n="Homepage">صفحه اصلی</div>
      </a>
    </li>
    {#if client.class != 'D'}
    <li class="menu-item">
      <a data-sveltekit-preload-data="hover" href="/user/shop" class="menu-link">
        <i class='menu-icon bx bx-store-alt'></i>
        <div data-i18n="shop">سفارشات</div>
      </a>
    </li>
    {#if client.class == 'A' || client.class == 'B'|| client.parentProffesion == 'فروش'}
    <li class="menu-item">
      <a data-sveltekit-preload-data="hover"  href="/user/chat" class="menu-link">
        <i class='menu-icon bx bx-message-rounded-dots' ></i>
        <div data-i18n="Raya Chat">رایاچت</div>
      </a>
    </li>
    {#if client.class == 'A'}
    <li class="menu-item" >
      <a data-sveltekit-preload-data="hover" href="/user/callcenter" class="menu-link text-light">
        <i class='menu-icon bx bx-headphone'></i>
        <div data-i18n="Call Controller">سرنخ (در دست ساخت)</div>
      </a>
    </li>
    <li class="menu-item">
      <a data-sveltekit-preload-data="hover" href="/user/callcontroller" class="menu-link" data-sveltekit-reload>
        <i class='menu-icon bx bx-microphone' ></i>
        <div data-i18n="Call Controller">کنترل تماس</div>
      </a>
    </li>
    {/if}
    <li class="menu-item">
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="javascript:void(0);" class="menu-link menu-toggle">
        <i class='menu-icon bx bx-user'></i>
        <div data-i18n="Users">کاربران</div>
      </a>
      <ul class="menu-sub">
        <li class="menu-item">
          <a href="/user/client/customer" class="menu-link">
            
            <div data-i18n="Customers">مشتریان</div>
          </a>
        </li>
      </ul>
    {#if client.class == 'A'}

      <ul class="menu-sub">
        <li class="menu-item">
          <a data-sveltekit-preload-data="hover" href="/user/client/employe" class="menu-link">
           
            <div data-i18n="employes">کارکنان</div>
          </a>
        </li>
      </ul>
    {/if}

    </li>
    {/if}
    {#if client.class == 'A' || client.class == 'B'}
    <li class="menu-item">
      <a data-sveltekit-preload-data="hover" href="/user/blog" class="menu-link">
        <i class='menu-icon bx bx-rss' ></i>
        <div data-i18n="blog">بلاگ</div>
      </a>
    </li>
    {/if}
    {#if client.class == 'A' || client.class == 'B'|| client.parentProffesion == 'انبار'}
    <li class="menu-item">
      <a data-sveltekit-preload-data="hover" href="/user/product" class="menu-link">
        <i class='menu-icon bx bx-purchase-tag-alt'></i>
        <div data-i18n="Products">محصولات</div>
      </a>
    </li>
    {/if}

    <li class="menu-item">
      <a href="/user/shareFolder" class="menu-link">
        <i class='menu-icon tf-icons bx bx-folder-open' ></i>
        <div data-i18n="Share Folder">پوشه اشتراک</div>
      </a>
    </li>
    <hr>
    {/if}
    
    <li class="menu-item">
      <a data-sveltekit-preload-data="hover" href="/" class="menu-link">
        <i class='menu-icon tf-icons bx bx-exit' ></i>
        <div data-i18n="Exit">خروج</div>
      </a>
    </li>
  </ul>
</aside>