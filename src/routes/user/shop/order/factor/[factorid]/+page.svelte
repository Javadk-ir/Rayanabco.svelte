
<script lang="ts">
    import type { PageData } from './$types';
    import { onMount } from 'svelte';
    export let data: PageData;
    $: ({
        factor
    } = data);



function toArabicNumeral(en: string | number | null | undefined) {
   return ("" + en).replace(/[0-9]/g, function(t) {
       return "۰۱۲۳۴۵۶۷۸۹".slice(+t, +t+1);
     });
    }

	onMount(() => {
        function toArabicNumeral(en: string | number | null | undefined) {
            return ("" + en).replace(/[0-9]/g, function(t) {
                return "۰۱۲۳۴۵۶۷۸۹".slice(+t, +t+1);
            });
        }
	});

</script>


<link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />

<style>

section table {
  font-size: 0.6rem !important;
  
}
section {
  background-color: #fff;
}


.maintable {
  background-image: url(../img/output-onlinepngtools.png);
    background-blend-mode: lighten;
  background-blend-mode: lighten;
  background-size: auto 80%;
    background-repeat: no-repeat;
    background-position: center;
}

table {
  margin-left: auto;
  margin-right: auto;
  border: 1px black solid;
}
</style>


   

  <!-- start main -->
 
    <section class="p-2 px-4 pt-3">
      <div class="row">
        <div class="col-10">
          <h4 style="text-align: center;padding-right: 20%;">حواله</h4>
        </div>
        <div class="col">
          <div style="border: 1px solid black;">
            شماره حواله: {toArabicNumeral(factor.ordernumber)} <br>
            تاریخ: { new Intl.DateTimeFormat('fa-IR').format(new Date(factor.createdAt)) } 
          </div>
        </div>
      </div>
      <div class="maintable" style="border: 1px black solid;">
        <table class="table table-borderless" style="border: 1px solid black;">
            <thead>
                <td style="width:35%%"></td>
                <td style="width:25%;text-align:center" >مشخصات خریدار </td>
                <td style="width:40%"></td>

     
          <tr>
                <td style="width:35%">نام شخص حقیقی/حقوقی:{factor.name}</td>
                {#if factor.shomareeghtesadi == undefined || factor.shomareeghtesadi.length < 2 }
                  <td style="width:25%">شماره اقتصادی: *</td>
                {:else}
                  <td style="width:25%">شماره اقتصادی: {factor.shomareeghtesadi}</td>
                {/if}

                {#if factor.cartmelineveshte == undefined || factor.cartmelineveshte.length < 2}
                  <td style="width:25%">شماره ثبت / شماره ملی: *</td>
                  {:else}
                  <td style="width:25%">شماره ثبت / شماره ملی: {factor.cartmelineveshte}></td>
                  {/if}

          </tr>
          <tr>
            <td >شماره تلفن / نمابر: {toArabicNumeral(factor.resphonenumber)}</td>
            <td>کد پستی {toArabicNumeral('10')} رقمی: {toArabicNumeral(factor.postcode)}</td>
          </tr>
          <tr>
            <td>نشانی: </td>
            <td> {factor.addressbar}</td>
          </tr>
          <tr>
            <td style="border: 1px solid black; border-left: 1px solid white !important;"></td>
            <td style="border: 1px solid black; border-left: 1px solid white !important;">
              <small style="text-align: center;font-size: 0.5rem;">
                مشخصات کالا یا خدمات مورد معامله (کلیه مبالغ به <b>ریال</b> میباشد)
              </small>
            </td>
            <td style="border: 1px solid black;"></td>

          </tr>
        </thead>
      </table>
      

        <table class="table table-bordered" style="border: 1px solid black;">
          <thead>
            <tr style="text-align: center;">
              <td style="width:8%">ردیف</td>
              <td style="width:5%">کد کالا</td>
              <td style="width:35%">شرح کالا یا خدمات</td>
              <td style="width:5%">تعداد/مقدار</td>
              <td style="width:9%">مبلغ واحد</td>
              <td style="width:13%">مبلغ کل</td>
              <td style="width:7%">مبلغ تخفیف</td>
              <td style="width:23%">مبلغ کل پس از کسر تخفیف</td>
            </tr>
          </thead>
            <tbody>
              {#each factor.mahsolat as element, index}
            <tr style="text-align: center;">
              <td>{index + 1}</td>
              <td>-</td>
              <td style="text-align: right;">{toArabicNumeral(element[0])}</td>

              <td>{toArabicNumeral(element[2].toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," ))}</td>

              <td>{toArabicNumeral(element[1].toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," ))}</td>

              <td>{toArabicNumeral(element[3].toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," ))}</td>

              <td style="text-align: center;">-</td>
              <td>{toArabicNumeral(element[3].toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," ))}</td>


            </tr>
              {/each}

            <tr style="text-align: center;">
              <td style="border-left: 0.1px white solid;"></td>
              <td style="border-left: 0.1px white solid;"></td>
              <td></td>
              <td style="border-left: 0.1px white solid; text-align: right;"></td>
              <td style="text-align: right;">جمع کل</td>

              <td>{toArabicNumeral(factor.price.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," ))}</td>
              <td>{toArabicNumeral(factor.price.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," ))}</td>
              {#if factor.takhfif.length < 3}
              {@const takh=factor.takhfif / 100}
              {@const takhprice=factor.price - (factor.price * takh) || '0' }
                <td>%{toArabicNumeral(factor.takhfif)}</td>
                <td>{toArabicNumeral(takhprice.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "," ))}</td>

            {:else}
                  <td>{toArabicNumeral(factor.takhfif)}</td>
                  {@const takhfifat = factor.takhfif - factor.price}
                  <td>{toArabicNumeral(takhfifat)}</td>
            {/if}
             


            </tr>
            
            <tr>
              <td style="border-left: 0.1px white solid;">توضیحات:</td>
            </tr>
          <tr>
            <td style="border-left: 0.1px white solid;">مهر و امضا فروشنده:</td>
            <td style="border-left: 0.1px white solid;"></td>
            <td style="border-left: 0.1px white solid;"></td>
            <td></td>
            <td style="border-left: 0.1px white solid;">مهر و امضا خریدار:</td>
            <td style="border-left: 0.1px white solid;"></td>
            <td style="border-left: 0.1px white solid;"></td>
            

          </tr>
          </tbody>
          </table>
          </div>
    </section>
    