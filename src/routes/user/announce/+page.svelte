<script lang="ts">
    import type { PageData } from './$types';
    import { enhance } from "$app/forms";
    import ToastSuccess from '$com/Formsuccess.svelte'
    export let data: PageData;
    export let form: any;

    $: ({
      order,
      employe
    } = data);
</script>


<div class="content-wrapper">
    <div class="col-12">
        <h2 class="text-center text-warning">اینجا چخبره؟!</h2>
        <p class="text-center">
            شما میتونید از این قسمت با شماره تلفن رسمی شرکت آروین فروزش رایاناب به کارکنان , مشتریان و هرکسی که دوست دارید پیام بدید! <br>
            اگه میخواید برای مشتری اطلاعاتی یا پیامکی ارسال بشه که بهتره با شماره تلفن شرکت ارسال بشه میتونید از اینجا استفاده کنید <br>
            اگه میخواید مناسبتی از طرف شرکت تبریک یا تسلیت گفته بشه<br>
            اگه میخواید مشتری ها از پروموشن های شگفت انگیزمون با خبر بشن <br>
            و یه عالمه اگه دیگه که جا نمیشه اینجا نوشته بشه... <br>
        </p>
    </div>
    <hr class="hr hr-blurry">
    {#if form?.success}
    <ToastSuccess/>
    <small style="display: none;">{window.location.reload()}</small>
    {/if}
    <div class="row">
    <div class="col-6 bg-light">
        <h4>پیامک به یک شخص</h4>
        <form action="?/solo" method="post" use:enhance>
        <label class="form-label" for="phone">شماره تلفن شخص را وارد کنید</label>
        <input class="form-control" type="text" name="phoneNumber">
        <label class="form-label" for="phone">پیام مورد نظر را وارد کنید</label>
        <textarea name="message" class="form-control" cols="10" rows="3"></textarea>
        <button class="btn btn-success btn-sm">ارسال</button>
        </form>
    </div>

    <div class="col-6 bg-light">
        <h4>پیامک گروهی</h4>
        <small class="text-warning">شماره تلفن هارا با علامت کاما ( <span class="text-danger"> , </span> ) از هم جدا کرده <br> مثال: 09110000000,9217777777,9369999999</small><br><br>
        <form action="?/multy" method="post" use:enhance>
        <label class="form-label" for="phone">شماره تلفن ها را وارد کنید</label>
        <input class="form-control" type="text" name="phoneNumber">
        <label class="form-label" for="phone">پیام مورد نظر را وارد کنید</label>
        <textarea name="message" class="form-control" cols="10" rows="3"></textarea>

        <button class="btn btn-success btn-sm">ارسال</button>
        </form>
    </div>
</div>

    <hr class="hr hr-blurry">
<div class="row">

    <div class="col-6 bg-light">
        <h4>پیامک به کارمندان - {employe.length} نفر</h4>

        <form action="?/employe" method="post" use:enhance>
        <label class="form-label" for="phone">پیام مورد نظر را وارد کنید</label>
        <textarea name="message" class="form-control" cols="10" rows="3"></textarea>
        <button class="btn btn-success btn-sm">ارسال</button>
        </form>
    </div>
    <div class="col-6 bg-light">
        <h4>پیامک به مشتریان - {order.length} نفر</h4>
        <form action="?/customer" method="post" use:enhance>
        <label class="form-label" for="phone">پیام مورد نظر را وارد کنید</label>
        <textarea name="message" class="form-control" cols="10" rows="3"></textarea>
        <button class="btn btn-success btn-sm">ارسال</button>
        </form>
    </div>
</div>
<hr class="hr hr-blurry">
<div class="col-12 bg-light">
    <h4>پیامک به مشتریان و کارمندان - {order.length + employe.length} نفر</h4>
    <form action="?/customerandemploye" method="post" use:enhance>
    <label class="form-label" for="phone">پیام مورد نظر را وارد کنید</label>
    <textarea name="message" class="form-control" cols="10" rows="3"></textarea>

    <button class="btn btn-success btn-sm">ارسال</button>
    </form>
</div>
</div>

