<script lang="ts">
  import Sidebar from "$com/sidebar.svelte";
  import Navbar from "$com/navbar.svelte";
  import Footer from "$com/footer.svelte";
  import type { LayoutData } from "./$types";
  export let data: LayoutData;
  $: ({ client } = data);
  </script>
<div class="app">
  <!-- Layout of HTML -->
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <!-- SideBar Componnet -->
      
      <Sidebar />
      
      <!-- Main View -->
      <div class="layout-page">
        <Navbar/>
        <div class="content-wrapper">

          <!-- Content -->
          <div class="container-xxl flex-grow-1 container-p-y">
            <slot />
          </div>
          <!-- / Content -->

          <!-- Footer Componnet -->
          <Footer />
        </div>
      </div>
      <!-- /Main View -->
    </div>
    <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>

    <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
  </div>
  <!-- /Layout of HTML -->
</div>
