<script lang="ts">
    import type { PageData } from './$types';
    
  
    export let data: PageData;
  $: ({ factor,adress,howtosell,postcode } = data);
</script>

<svelte:head>

    <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
</svelte:head>


<style>

section {
  background-color: #fff;
}
section table {
  font-size: 0.6rem !important;
  
}

table {
  margin-left: auto;
  margin-right: auto;
  border: 1px black solid;
}

.maintable {
  background-image: url(https://rayanabcom.storage.iran.liara.space/assest/output-onlinepngtools.png);
    background-blend-mode: lighten;
  background-blend-mode: lighten;
  background-size: auto 80%;
    background-repeat: no-repeat;
    background-position: center;
}

</style>


   


<section class="p-2 px-4 pt-3">
    <div class="maintable" >
        <div style="border: 1px solid black;">

            <div style="text-align: center;width: 100%;">

                <b>اطلاعات فرستنده</b>
                    
                <br>
  
         </div>

    <table class="table table-bordered">
        <tbody>
            <tr>
                <td style="width: 50%;">
                    فرستنده: <b>آروین فروش رایاناب</b>
                </td>
                <td>
                    تلفن: 02191080038
                </td>
            </tr>
            <tr>
                <td style="width: 50%;">
                    {postcode}       
                </td>
                <td style="width: 50%;">
                    شماره همراه: 09010750508
                </td>
            </tr>
            <tr>
                <td >
                    {adress}
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <div style="border: 1px solid black;">
        <div style="text-align: center;width: 100%;">

                <b>اطلاعات گیرنده</b>
            <br>

     </div>
     <table class="table table-bordered">
        <tbody>
            <tr>
                <td style="width: 50%;">
                    گیرنده: {factor.namecompany}
                </td>
                <td style="width: 50%;">
                    تلفن: {factor.phoneNumber}
                </td>
            </tr>
            <tr>
                <td style="width: 50%;">
                    کد پستی: {factor.postcode}
                </td>
                <td style="width: 50%;">
                    شماره همراه: {factor.resphonenumber}
                </td>
            </tr>
            <tr>
                <td>
                    {#if factor.addressbar}
                    ادرس: {factor.addressbar}
                    {:else}
                    ادرس: {factor.adressbar}
                    {/if}
                </td>
            </tr>


                <tr>
                    <td style="width: 50%;">
                        موسسه حمل: {factor.sentoption1}
                    </td>
                    <td style="width: 50%;">
                        {howtosell}
                    </td>
                </tr>
            </tbody>
        </table>
    
    </div>
    </div>
</section>



<section class="p-2 px-4 pt-3">
    <div class="maintable" >
        <div style="border: 1px solid black;">

            <div style="text-align: center;width: 100%;">

                <b>اطلاعات فرستنده</b>
                    
                <br>
  
         </div>

    <table class="table table-bordered">
        <tbody>
            <tr>
                <td style="width: 50%;">
                    فرستنده: <b>آروین فروش رایاناب</b>
                </td>
                <td>
                    تلفن: 02191080038
                </td>
            </tr>
            <tr>
                <td style="width: 50%;">
                    {postcode}       
                </td>
                <td style="width: 50%;">
                    شماره همراه: 09010750508
                </td>
            </tr>
            <tr>
                <td >
                    {adress}
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    <div style="border: 1px solid black;">
        <div style="text-align: center;width: 100%;">

                <b>اطلاعات گیرنده</b>
            <br>

     </div>
     <table class="table table-bordered">
        <tbody>
            <tr>
                <td style="width: 50%;">
                    گیرنده: {factor.namecompany}
                </td>
                <td style="width: 50%;">
                    تلفن: {factor.phoneNumber}
                </td>
            </tr>
            <tr>
                <td style="width: 50%;">
                    کد پستی: {factor.postcode}
                </td>
                <td style="width: 50%;">
                    شماره همراه: {factor.resphonenumber}
                </td>
            </tr>
            <tr>
                <td>
                    {#if factor.addressbar}
                    ادرس: {factor.addressbar}
                    {:else}
                    ادرس: {factor.adressbar}
                    {/if}
                </td>
            </tr>


                <tr>
                    <td style="width: 50%;">
                        موسسه حمل: {factor.sentoption1}
                    </td>
                    <td style="width: 50%;">
                        {howtosell}
                    </td>
                </tr>
            </tbody>
        </table>
    
    </div>
    </div>
</section>