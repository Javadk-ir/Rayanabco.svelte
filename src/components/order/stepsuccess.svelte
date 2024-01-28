<script lang="ts">
    export let id = 'درحال بررسی واحد مربوط'
    export let idcaption = 'درحال بررسی واحد مربوط'
    export let date11 = new Date()
    export let date22 = new Date()
    export let date33 = new Date()
    export let topclass = 'false'


    function gettimer(value1: any, value2: any) {
        let date1 = value1
        let date2 = value2
        if (value1 == undefined) date1 = new Date()
        if (value2 == undefined) date2 = date1


        let diff = new Date(date2).getTime() - new Date(date1).getTime();

        let msec = diff;
        let hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        let mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        let ss = Math.floor(msec / 1000);
        msec -= ss * 1000;

        return hh + ":" + mm + ":" + ss
      }

  </script>
{#if topclass == 'true'}
<div class="step">
    {#if date33 == date22}
    <button type="button" class="step-trigger text-success" data-bs-toggle="popover" data-bs-offset="0,14" data-bs-placement="top" data-bs-custom-class="popover-success" data-bs-content="ثبت: {new Intl.DateTimeFormat('fa-IR', {dateStyle: 'full', timeStyle: 'long'}).format(new Date(date11)) }">
        <span class="step-trigger text-success" >
            <span class="bs-stepper-circle text-success" >
                <i class='bx bx-check'></i>
            </span>
            <span class="bs-stepper-label" >
              <span class="bs-stepper-title" >{id}</span>
              <span class="bs-stepper-subtitle text-success" >{@html idcaption.replace(/\n/g, '<br />')}</span>
            </span>
          </span>
    </button>
    {:else}
    <button type="button" class="step-trigger text-success" data-bs-toggle="popover" data-bs-offset="0,14" data-bs-placement="top" data-bs-custom-class="popover-success" data-bs-content="ثبت: {gettimer(date11,date22)}">
        <span class="step-trigger text-success" >
            <span class="bs-stepper-circle text-success" >
                <i class='bx bx-check'></i>
            </span>
            <span class="bs-stepper-label" >
              <span class="bs-stepper-title" >{id}</span>
              <span class="bs-stepper-subtitle text-success" >{@html idcaption.replace(/\n/g, '<br />')}</span>
            </span>
          </span>
    </button>
    {/if}

  </div>
  {:else}
<div class="step">

  <span class="step-trigger text-success" >
    <span class="bs-stepper-circle text-success" >
        <i class='bx bx-check'></i>
    </span>
    <span class="bs-stepper-label" >
      <span class="bs-stepper-title" >{id}</span>
      <span class="bs-stepper-subtitle text-success" >{@html idcaption.replace(/\n/g, '<br />')}</span>
    </span>
  </span>
  </div>
{/if}