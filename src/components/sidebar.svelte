<script lang="ts">
	import { page } from '$app/stores';
  const client = $page.data.client
</script>
<style>
  @media print
{    
  
    .no-print, .no-print *
    {
        display: none !important;
    }
}
</style>
<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme no-print">
  <div class="app-brand demo">
    <a href="/user" class="app-brand-link">
      <span class="app-brand-logo demo">    
      </span>
      <span class="app-brand-text demo menu-text fw-bold ms-2">رایاناب</span>
    </a>

    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" class="layout-menu-toggle menu-link text-large ms-auto ">
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
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="javascript:void(0);" class="menu-link menu-toggle">
        <i class='menu-icon bx bx-store-alt'></i>
        <div data-i18n="Users">سفارشات</div>
      </a>
      <ul class="menu-sub">
        <li class="menu-item">
          <a data-sveltekit-preload-data="hover" href="/user/shop" class="menu-link">
            
            <div data-i18n="Open Order">سفارشات باز</div>
          </a>
        </li>
      </ul>
    {#if client.class == 'A'}

      <ul class="menu-sub">
        <li class="menu-item">
          <a data-sveltekit-preload-data="hover" href="/user/shop/archivee" class="menu-link">
           
            <div data-i18n="archive">بایگانی</div>
          </a>
        </li>
      </ul>
    {/if}
  </li>
  <li class="menu-item">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="javascript:void(0);" class="menu-link menu-toggle">
      <i class='menu-icon bx bx-user'></i>
      <div data-i18n="Users">کاربران</div>
    </a>
    <ul class="menu-sub">
      <li class="menu-item">
        <a data-sveltekit-preload-data="hover" href="/user/client/customer" class="menu-link">
          
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
  
  {#if client.class == 'A' || client.class == 'B'|| client.parentProffesion == 'انبار'}
  <li class="menu-item">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="javascript:void(0);" class="menu-link menu-toggle">
      <i class=" menu-icon fa-regular fa-building"></i>
      <div data-i18n="Users">
        واحد فنی
        <span id="badgeinfo" class="badge bg-danger me-1">
          جدید !
        </span>
      </div>
    </a>
    <ul class="menu-sub">
      <li class="menu-item">
        <a data-sveltekit-preload-data="hover" href="/user/technical/requestunit" class="menu-link">
         
          <div data-i18n="Request product">درخواست کالا</div>
        </a>
      </li>
    </ul>
  <ul class="menu-sub">
    <li class="menu-item">
      <a data-sveltekit-preload-data="hover" href="/user/product" class="menu-link">
        <div data-i18n="Products">محصولات</div>
      </a>
    </li>
  </ul>
  <ul class="menu-sub">
    <li class="menu-item">
      <a data-sveltekit-preload-data="hover" href="/user/shop" class="menu-link text-light">
        
        <div data-i18n="Paziresh">پذیرش (بزودی)</div>
      </a>
    </li>
  </ul>

</li>
{/if}
<li class="menu-item">
  <a data-sveltekit-preload-data="hover"  href="/user/requests" class="menu-link">
    <i class="menu-icon fa-regular fa-hand-point-up"></i>
    <div data-i18n="Raya Chat">
      درخواست ها

    </div>
  </a>
</li>
    {#if client.class == 'A' || client.class == 'B'|| client.parentProffesion == 'فروش'}
    <li class="menu-item">
      <a data-sveltekit-preload-data="hover"  href="/user/chat" class="menu-link" data-sveltekit-reload>
        <i class='menu-icon bx bx-message-rounded-dots' ></i>
        <div data-i18n="Raya Chat">رایاچت</div>
      </a>
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


    <li class="menu-item">
      <a data-sveltekit-preload-data="hover"  href="/user/shareFolder" class="menu-link">
        <i class='menu-icon tf-icons bx bx-folder-open' ></i>
        <div data-i18n="Share Folder">پوشه اشتراک</div>
      </a>
    </li>
    {#if client.class == 'A'}
    <li class="menu-item" >
      <a data-sveltekit-preload-data="hover" href="/user/callcenter" class="menu-link text-light">
        <i class='menu-icon bx bx-headphone'></i>
        <div data-i18n="Call Controller">سرنخ (بزودی)</div>
      </a>
    </li>
    <li class="menu-item">
      <a data-sveltekit-preload-data="hover" href="/user/callcontroller" class="menu-link text-light" data-sveltekit-reload>
        <i class='menu-icon bx bx-microphone' ></i>
        <div data-i18n="Call Controller">کنترل تماس <br>(غیر قابل دسترسی)</div>
      </a>
    </li>
    {/if}
    <hr>
    {/if}
    
    <li class="menu-item">
      <a  data-sveltekit-preload-data="hover" href="/" class="menu-link">
        <i class='menu-icon tf-icons bx bx-exit' ></i>
        <div data-i18n="Exit">خروج</div>
      </a>
    </li>
  </ul>
</aside>