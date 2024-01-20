<script lang="ts">
    import { page } from '$app/stores';
</script>



    <!-- Error -->
    <div class="container-xxl container-p-y" style="text-align: center;">
        <div class="misc-wrapper">
          <h1 class="mb-2 mx-2 secondary-font">وای من ! مشکلی وجود داره</h1>
          <p class="mb-4 mx-2">کد خطا: {$page.status}: {$page.error?.message}</p>
          <p class="mb-4 mx-2">نمیدونم چرا با این مشکل رو به رو هستید! <br>پیشنهاد میکنم سریعتر مشکل رو به پشتیبانیم گزارش بده تا رفع بشه </p>
          <a href="/" class="btn btn-primary">بازگشت به خانه</a>
        </div>
      </div>
      <!-- /Error -->