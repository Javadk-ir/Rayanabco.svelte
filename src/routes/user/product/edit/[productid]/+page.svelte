<script lang="ts">
    import type { PageData } from "./$types";
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';
    import ToastSuccess from '$com/successfulMessageModal.svelte'

    export let form;
    export let data: PageData;
    $: ({ product } = data);

    let value = 'Loading... <i>mybe</i>'
    import { page } from '$app/stores';
    const client = $page.data.client



    function newFieldAdder2 () : any {
        const name: any = document.querySelector(".captionsf");

        let col2 = document.createElement('div')
        col2.classList.add('col-6');
        col2.innerHTML= '<input placeholder="اضافه شد !" type="text" class="form-control" id="captionTitle" name="captionTitle" value=""/>';

        let col1 = document.createElement('div')
        col1.classList.add('col-6');
        col1.innerHTML= '<textarea rows="1" class="form-control" id="caption" name="caption" value=""/> </textarea>';


        col1.style.marginTop = "10px";
        col2.style.marginTop = "10px";


        name.appendChild(col2);
        name.appendChild(col1);
            } 


            function keyinfoo2() {
        const name: any = document.querySelector(".keyinfo");

        let col1 = document.createElement('div')
        col1.classList.add('col-6');
        col1.innerHTML= ' <input style="border: 1px solid #d3d3d3;" placeholder="(اضافه شد !)" type="text" class="form-control" id="keyinfo" name="keyinfo" value="" placeholder="..."/>';

        col1.style.marginTop = "10px";

        name.appendChild(col1);
            } 
	onMount(() => {
      let  newFieldAdder: any = document.getElementById('newFieldAdder')
      newFieldAdder.addEventListener('click', function() {
        newFieldAdder2()
        });
      let  keyinfoo: any = document.getElementById('keyinfoo')
      keyinfoo.addEventListener('click', function() {
        keyinfoo2()
        });
	});
  </script>
  
  <div class="content-wrapper">
    {#if form?.success}
    <ToastSuccess/>

      <small style="display: none;">{goto("/user/product/")}</small>
    {/if}
    <div class="row">
      <div class="col-xl">
        <div class="card mb-4">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
          </div>
          <div class="card-body">
  
              <form id="formAuthentication" class="mb-3" action="?/edit" method="POST" use:enhance>  
                {#if client.parentProffesion == 'انبار'}
              <div class="row form-group mb-4">
                <h5 style="text-align: center;" class="text-warning">موجودی انبار</h5>

                    <div class="col-4">
                      <label for="title">موجودی 16GB</label>
                      <input type="text" class="form-control" id="title" name="G16B" value="{ product.mG16B }"/>
                    </div>
                    <div class="col-4">
                      <label for="title">موجودی 32</label>
                      <input type="text" class="form-control" id="title" name="G32B" value="{ product.mG32B }" />
                    </div>
                    <div class="col-4">
                      <label for="title">موجودی 64</label>
                      <input type="text" class="form-control" id="title" name="G64B" value="{ product.mG64B }" />
                    </div>
                    <div class="col-4">
                      <label for="title">موجودی 128</label>
                      <input type="text" class="form-control" id="title" name="G128B" value="{product.mG128B}" />
                    </div>
                    <div class="col-4">
                      <label for="title">موجودی 256</label>
                      <input type="text" class="form-control" id="title" name="G256B" value="{product.mG256B}" />
                    </div>
                    <div class="col-4">
                      <label for="title">موجودی 512</label>
                      <input type="text" class="form-control" id="title" name="G512B" value="{product.mG512B}"  />
                    </div>
                    <div class="col-6">
                      <label for="title">موجودی 1TB</label>
                      <input type="text" class="form-control" id="title" name="T1B" value="{product.mT1B}"  />
                    </div>
                    <div class="col-6">
                      <label for="title">موجودی 2TB</label>
                      <input type="text" class="form-control" id="title" name="T2B" value="{product.mT2B}"  />
                    </div>
                  </div>
                  <br><br><br>
 {:else}
                  <div class="col">
                    <label for="title">عنوان</label>
                    <input type="text" class="form-control" id="title" name="title" value="{ product.title }"/>
                  </div>
                  <div class="col">
                    <label for="category"> دسته بندی</label>
                    <select required class="form-control" name="category" id="category" placeholder="">
                      <option value="{ product.category }">{product.category}</option>
                      <option value="SSD">SSD</option>
                      <option value="Micro SD">Micro SD</option>
                      <option value="Flash Drive">Flash Drive</option>
                    </select>
                  </div>
               

                
              <div class="row form-group mb-4">
                <h5 style="text-align: center;" class="text-warning">لیست قیمتی کلاس A</h5>
                <div class="col-4">
                  <label for="title">قیمت 16GB</label>
                  <input type="text" class="form-control" id="title" name="cAG16B" value="{ product.cAG16B }"/>
                </div>
                <div class="col-4">
                  <label for="title">قیمت 32</label>
                  <input type="text" class="form-control" id="title" name="cAG32B" value="{ product.cAG32B }" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 64</label>
                  <input type="text" class="form-control" id="title" name="cAG64B" value="{ product.cAG64B }" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 128</label>
                  <input type="text" class="form-control" id="title" name="cAG128B" value="{product.cAG128B}" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 256</label>
                  <input type="text" class="form-control" id="title" name="cAG256B" value="{product.cAG256B}" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 512</label>
                  <input type="text" class="form-control" id="title" name="cAG512B" value="{product.cAG512B}"  />
                </div>
                <div class="col-6">
                  <label for="title">قیمت 1TB</label>
                  <input type="text" class="form-control" id="title" name="cAT1B" value="{product.cAT1B}"  />
                </div>
                <div class="col-6">
                  <label for="title">قیمت 2TB</label>
                  <input type="text" class="form-control" id="title" name="cAT2B" value="{product.cAT2B}"  />
                </div>
              </div>
                
              <div class="row form-group mb-4">
                <h5 style="text-align: center;" class="text-warning">لیست قیمتی کلاس B</h5>
                <div class="col-4">
                  <label for="title">قیمت 16GB</label>
                  <input type="text" class="form-control" id="title" name="cBG16B" value="{ product.cBG16B }"/>
                </div>
                <div class="col-4">
                  <label for="title">قیمت 32</label>
                  <input type="text" class="form-control" id="title" name="cBG32B" value="{ product.cBG32B }" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 64</label>
                  <input type="text" class="form-control" id="title" name="cBG64B" value="{ product.cBG64B }" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 128</label>
                  <input type="text" class="form-control" id="title" name="cBG128B" value="{product.cBG128B}" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 256</label>
                  <input type="text" class="form-control" id="title" name="cBG256B" value="{product.cBG256B}" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 512</label>
                  <input type="text" class="form-control" id="title" name="cBG512B" value="{product.cBG512B}"  />
                </div>
                <div class="col-6">
                  <label for="title">قیمت 1TB</label>
                  <input type="text" class="form-control" id="title" name="cBT1B" value="{product.cBT1B}"  />
                </div>
                <div class="col-6">
                  <label for="title">قیمت 2TB</label>
                  <input type="text" class="form-control" id="title" name="cBT2B" value="{product.cBT2B}"  />
                </div>
              </div>
                
              <div class="row form-group mb-4">
                <h5 style="text-align: center;" class="text-warning">لیست قیمتی کلاس C</h5>
                <div class="col-4">
                  <label for="title">قیمت 16GB</label>
                  <input type="text" class="form-control" id="title" name="cCG16B" value="{ product.cCG16B }"/>
                </div>
                <div class="col-4">
                  <label for="title">قیمت 32</label>
                  <input type="text" class="form-control" id="title" name="cCG32B" value="{ product.cCG32B }" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 64</label>
                  <input type="text" class="form-control" id="title" name="cCG64B" value="{ product.cCG64B }" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 128</label>
                  <input type="text" class="form-control" id="title" name="cCG128B" value="{product.cCG128B}" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 256</label>
                  <input type="text" class="form-control" id="title" name="cCG256B" value="{product.cCG256B}" />
                </div>
                <div class="col-4">
                  <label for="title">قیمت 512</label>
                  <input type="text" class="form-control" id="title" name="cCG512B" value="{product.cCG512B}"  />
                </div>
                <div class="col-6">
                  <label for="title">قیمت 1TB</label>
                  <input type="text" class="form-control" id="title" name="cCT1B" value="{product.cCT1B}"  />
                </div>
                <div class="col-6">
                  <label for="title">قیمت 2TB</label>
                  <input type="text" class="form-control" id="title" name="cCT2B" value="{product.cCT2B}"  />
                </div>
              </div>
                
              <div class="row form-group mb-4">
                <h5 style="text-align: center;" class="text-warning">موجودی انبار</h5>

                <div class="col-4">
                  <label for="title">موجودی 16GB</label>
                  <input type="text" class="form-control" id="title" name="mG16B" value="{ product.mG16B }"/>
                </div>
                <div class="col-4">
                  <label for="title">موجودی 32</label>
                  <input type="text" class="form-control" id="title" name="mG32B" value="{ product.mG32B }" />
                </div>
                <div class="col-4">
                  <label for="title">موجودی 64</label>
                  <input type="text" class="form-control" id="title" name="mG64B" value="{ product.mG64B }" />
                </div>
                <div class="col-4">
                  <label for="title">موجودی 128</label>
                  <input type="text" class="form-control" id="title" name="mG128B" value="{product.mG128B}" />
                </div>
                <div class="col-4">
                  <label for="title">موجودی 256</label>
                  <input type="text" class="form-control" id="title" name="mG256B" value="{product.mG256B}" />
                </div>
                <div class="col-4">
                  <label for="title">موجودی 512</label>
                  <input type="text" class="form-control" id="title" name="mG512B" value="{product.mG512B}"  />
                </div>
                <div class="col-6">
                  <label for="title">موجودی 1TB</label>
                  <input type="text" class="form-control" id="title" name="mT1B" value="{product.mT1B}"  />
                </div>
                <div class="col-6">
                  <label for="title">موجودی 2TB</label>
                  <input type="text" class="form-control" id="title" name="mT2B" value="{product.mT2B}"  />
                </div>
              </div>
                
            <div class="captionsf row form-group mb-4">
              <div  class="col-5">
                <label for="captionTitle">سر تیتر <sup class="text-danger">هر فیلد برای یک سر تیتر میباشد</sup></label>
              {#each product.captionTitle as title}
                  <input style="margin-bottom: 2%;" type="text" class="form-control" id="captionTitle" name="captionTitle" value="{title}"/>
              {/each}
                </div>
              <div class="col-7">
                <label for="caption">توضیحات <sup class="text-danger">هر فیلد برای یک پاراگراف میباشد</sup></label>
                {#each product.caption as caption}
                  <textarea style="margin-bottom: 2%;" rows="3" class="form-control" id="caption" name="caption" value='{caption}'/>
                  {/each}

                </div>
                <div class="col-12">
                  <br>
                  <button class="btn btn-primary" id="newFieldAdder" type="button"><i class="bi bi-plus-lg"></i>فیلد جدید</button>
                </div>
              </div>
              
                
              <div class="keyinfo row form-group mb-4">
                <div class="col-10">
                  <label for="keyinfo">توضیحات کلیدی <sup class="text-danger">ترجیحا یک جمله ای و کوتاه باشد</sup></label>
                </div>
                  {#each product.keyinfo as keyinfo}
                    <div class="col-6">
                      <input style="margin-bottom: 2%;" type="text" class="form-control" id="keyinfo" name="keyinfo" value="{keyinfo}"/>
                    </div>
                    {/each}
                      </div>
                      <div class="col-12">
                        <br>
                        <button class="btn btn-primary" id="keyinfoo"  type="button"><i class="bi bi-plus-lg"></i>فیلد جدید</button>
                      </div>
                  
                <label for="keyinfo">توضیحات فنی <span class="text-danger">درصورت مرتبط نبودن قابلیت با محصول انرا خالی بگذارید</span></label>
                
                <table class="table table-striped">
                  <tbody>
                    {#if  product.detail.size != null}
                    <tr>
                      <td>سایز</td>
                      <td>
                        <input type="text" class="form-control" id="size" name="size" value="{ product.detail.size }" />
                          
                      </td>
                      </tr>
                      {/if}

                      {#if  product.detail.weight != null}
                      <tr>
                      <td>وزن</td>
                      <td>
                        <input type="text" class="form-control" id="weight" name="weight" value="{ product.detail.weight }" />
                       </td>
                      </tr>
                      {/if}
                          {#if  product.detail.connector != null}

                              <tr>
                                  <td>رابط</td>
                                  <td>
                        <input type="text" class="form-control" id="connector" name="connector" value="{ product.detail.connector }" />
                      </td>

                              </tr>
                              {/if}

                              {#if  product.detail.formdactor != null}

                          <tr>
                              <td>فرم داکتور</td>
                              <td> 
                        <input type="text" class="form-control" id="formdactor" name="formdactor" value="{ product.detail.formdactor }" />
                      </td>
                          </tr>
                          {/if}
                      
                          {#if  product.detail.Capacity != null}

                          <tr>
                              <td>فضای ذخیره سازی</td>
                              <td> 
                        <input type="text" class="form-control" id="Capacity" name="Capacity" value="{ product.detail.Capacity }" />
                      </td>
                          </tr>
                          {/if}
                          {#if  product.detail.type != null}

                          <tr>
                              <td>نوع</td>
                              <td> 
                        <input type="text" class="form-control" id="type" name="type" value="{ product.detail.type }" />
                      </td>
                          </tr>
                          {/if}
                          {#if  product.detail.Readingspeed != null}
                          <tr>
                              <td>سرعت خواندن</td>
                              <td> 
                        <input type="text" class="form-control" id="Readingspeed" name="Readingspeed" value="{product.detail.Readingspeed} " />
                      </td>
                          </tr>
                          {/if}
                          {#if  product.detail.writingspeed != null}
                          <tr>
                              <td>سرعت نوشتن</td>
                              <td>                         
                                <input type="text" class="form-control" id="writingspeed" name="writingspeed" value="{product.detail.writingspeed} " />
                              </td>
                          </tr>
                          {/if}
                          {#if  product.detail.color != null}
                          <tr>
                              <td>رنگ</td>
                              <td> <input type="text" class="form-control" id="color" name="color" value="{product.detail.color} " /></td>
                          </tr>
                          {/if}
                          {#if  product.detail.canotg != null}
                          <tr>
                              <td>قابلیت OTG</td>
                              <td> <input type="text" class="form-control" id="canotg" name="canotg" value="{product.detail.canotg} " /> </td>
                          </tr>
                          {/if}
                          {#if  product.detail.steeltype != null}
                          <tr>
                              <td>جنس</td>
                              <td> <input type="text" class="form-control" id="steeltype" name="steeltype" value="{product.detail.steeltype} " /> </td>
                          </tr>
                          {/if}
                          {#if  product.detail.light != null}
                          <tr>
                              <td>چراغ</td>
                              <td> <input type="text" class="form-control" id="light" name="light" value="{product.detail.light} " /> </td>
                          </tr>
                          {/if}
                     {#if  product.detail.zarbeprof != null }
                          <tr>
                              <td>ضد ضربه</td>
                              <td> <input type="text" class="form-control" id="zarbeprof" name="zarbeprof" value="{product.detail.zarbeprof} " /> </td>
                          </tr>
                          {/if}
                          {#if  product.detail.ghobarprof != null }
                          <tr>
                              <td>ضد غبار</td>
                              <td> <input type="text" class="form-control" id="ghobarprof" name="ghobarprof" value="{product.detail.ghobarprof} " /> </td>
                          </tr>
                          {/if}
                          {#if  product.detail.waterprof != null }
                          <tr>
                              <td>ضد اب</td>
                              <td> <input type="text" class="form-control" id="waterprof" name="waterprof" value="{product.detail.waterprof} " /> </td>
                          </tr>
                          {/if}
                          {#if product.detail.osSupport != null }
                          <tr>
                              <td>سازگار با</td>
                              <td> <input type="text" class="form-control" id="osSupport" name="osSupport" value="{product.detail.osSupport} " /> </td>
                          </tr>
                          {/if}
                          {#if product.detail.SpeedStandard != null}
                          <tr>
                              <td>استاندارد سرعت</td>
                              <td> <input type="text" class="form-control" id="SpeedStandard" name="SpeedStandard" value="{product.detail.SpeedStandard} " /> </td>
                          </tr>
                          {/if}
                  </tbody>
              </table>
              {/if}
                <div class="form-group mb-4">
                  <button type="submit" class="btn btn-success">بروزرسانی</button>
                  <a href="/product" type="submit" class="btn btn-primary">برگشت</a>
                </div>

                
              </div>
  

          </div>
        </div>
      </div>
      </div>
