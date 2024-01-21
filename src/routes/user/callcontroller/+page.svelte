<script lang="ts">
    import type { PageData } from './$types';
  import { onMount } from 'svelte';
    
    export let data: PageData;
    $: ({
      client,
    data,
    } = data);

    onMount(() => {

        let xinformation: any = document.getElementsByClassName('table_data')
        let yinformation: any = document.getElementsByClassName('table_data_last_row')
        let information: any = Object.values(xinformation).concat(Object.values(yinformation));
        for (var i = 0, len = information.length; i < len; i++) {


if (information[i].innerText == '300'){
  information[i].innerText = 'خانم همتی (300)'
}else if(information[i].innerText == '310'){
  information[i].innerText = 'خانم همتی (310)'
}else if(information[i].innerText == '320' ){
  information[i].innerText = 'فاطمه خندانی (320)'
}else if(information[i].innerText == '330'){
  information[i].innerText = 'فاطمه خندانی (330)'
}else if(information[i].innerText == '420'){
  information[i].innerText = 'فاطمه خندانی (موبایل 420)'
}else if(information[i].innerText == '400'){
  information[i].innerText = 'عاطفه بنائی (400)'
}else if( information[i].innerText == '410'){
  information[i].innerText = 'عاطفه بنائی (410)'
}else if(information[i].innerText == '500'){
  information[i].innerText = 'محمد جواد کرمی (500)'
}else if(information[i].innerText == '600'){
  information[i].innerText = 'معصومه رهبر یکتاشناس (600)'
}else if(information[i].innerText == '610'){
  information[i].innerText = 'معصومه رهبر یکتاشناس (610)'
}else if(information[i].innerText == '620'){
  information[i].innerText = 'سید صنم سیدزاده (620)'
}else if(information[i].innerText == '630'){
  information[i].innerText = 'سید صنم سیدزاده (630)'
}else if(information[i].innerText == '800'){
  information[i].innerText = 'اقای سروری (800)'
}else if(information[i].innerText == '850'){
  information[i].innerText = 'مجید سروری (موبایل-850)'
}else if( information[i].innerText == '860'){
  information[i].innerText = 'مجید سروری (860)'
}else if( information[i].innerText == '200'){
  information[i].innerText = 'ارام حمیدی (200)'
}else if( information[i].innerText == '220'){
  information[i].innerText = 'ارام حمیدی (220)'
}

if(information[i].innerText.includes('.') 
|| information[i].innerText.includes('Local') 
|| information[i].innerText.includes('IAX2') 
|| information[i].innerText.includes('SIP')
|| information[i].innerHTML.includes('<a onclick="showCel')
|| information[i].innerHTML == '&nbsp;'){
  information[i].style.display = 'none'
}
}
	});
</script>





<div class="content-wrapper">

<section class="p-2 px-4 pt-3 col">
    <h6 style="text-align: center;">تماس های گرفته شده با شخص</h6>
    <br>
      <div class="row">
          <table class="table align-middle mb-0 bg-white">
              <thead class="bg-light">
                <tr>
                  <th>تاریخ</th>
                  <th>تماس گیرنده</th>
                  <th>مقصد</th>
                  <th>وضعیت</th>
                  <th>مدت زمان مکالمه</th>
                </tr>
              </thead>
              <tbody>
                {@html data.replace(/\n/g, '<br />')}
              </tbody>
            </table>
      </div>
  </section>


</div>