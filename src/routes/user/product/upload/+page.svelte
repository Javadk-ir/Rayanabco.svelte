<script lang="ts">
  import type { PageData } from "./$types";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import { onMount } from 'svelte';
  import ToastSuccess from '$com/successfulMessageModal.svelte'

  export let form;
  export let data: PageData;
  $: ({ client } = data);

  
  
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

    <small style="display: none;">{goto('/user/product/')}</small>
  {/if}
  <div class="row">
    <div class="col-xl">
      <div class="card mb-4">
        <div
          class="card-header d-flex justify-content-between align-items-center"
        >
        </div>
        <div class="card-body">

            <form id="formAuthentication" class="mb-3" action="?/upload" method="POST" use:enhance enctype='multipart/form-data'>
              <div class="row form-group mb-4">
                <div class="col-6">
                  <label for="title">عنوان</label>
                  <input type="text" class="form-control" id="title" name="title" value="" placeholder="نام محصول"/>
                </div>
                <div class="col-6">
                  <label for="category"> دسته بندی</label>
                <select required class="form-control" name="category" id="category" placeholder="">
                  <option value="متفرقه">انتخاب کنید...</option>
                  <option value="SSD">SSD</option>
                  <option value="Micro SD">Micro SD</option>
                  <option value="Flash Drive">Flash Drive</option>
                </select>
                </div>
              </div>


              <div class="captionsf row form-group mb-4">
                <div class="col-5">
                  <label for="captionTitle">سر تیتر <sup class="text-danger">هر فیلد برای یک سر تیتر میباشد</sup></label>
                  <input type="text" class="form-control" id="captionTitle" name="captionTitle" value="" placeholder="..."/>
                </div>
                <div class="col-5">
                  <label for="caption">توضیحات <sup class="text-danger">هر فیلد برای یک پاراگراف میباشد</sup></label>
                  <textarea rows="1" class="form-control" id="caption" name="caption" />
                </div>
                <div class="col-2">
                  <br>
                  <button class="btn btn-primary" id="newFieldAdder" type="button"><i class="bi bi-plus-lg"></i>فیلد جدید</button>
                </div>
              </div>

   
              <div class="keyinfo row form-group mb-4">
                <div class="col-10">
                  <label for="keyinfo">توضیحات کلیدی <sup class="text-danger">ترجیحا یک جمله ای و کوتاه باشد</sup></label>
                  <input type="text" class="form-control" id="keyinfo" name="keyinfo"/>
                  </div>
                  <div class="col-2">
                    <br>
                    <button class="btn btn-primary" id="keyinfoo" type="button"><i class="bi bi-plus-lg"></i>فیلد جدید</button>
                  </div>
                </div>
        
                <label for="keyinfo">توضیحات فنی <span class="text-danger">درصورت مرتبط نبودن قابلیت با محصول انرا خالی بگذارید</span></label>

                <table class="table ">
                  <tbody>
                    <tr>
                      <th scope="row">استاندارد سرعت</th>
                      <td>
                        <input type="text" class="form-control" id="SpeedStandard" name="SpeedStandard" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">سازگار با</th>
                      <td>
                        <input type="text" class="form-control" id="osSupport" name="osSupport" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">ضد اب</th>
                      <td>
                        <input type="text" class="form-control" id="waterprof" name="waterprof" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">ضد غبار</th>
                      <td>
                        <input type="text" class="form-control" id="ghobarprof" name="ghobarprof" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">ضد ضربه</th>
                      <td>
                        <input type="text" class="form-control" id="zarbeprof" name="zarbeprof" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">چراغ</th>
                      <td>
                        <input type="text" class="form-control" id="light" name="light" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">جنس</th>
                      <td>
                        <input type="text" class="form-control" id="steeltype" name="steeltype" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">قابلیت OTG</th>
                      <td>
                        <input type="text" class="form-control" id="canotg" name="canotg" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">رنگ</th>
                      <td>
                        <input type="text" class="form-control" id="color" name="color" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">سرعت نوشتن</th>
                      <td>
                        <input type="text" class="form-control" id="writingspeed" name="writingspeed" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">سرعت خواندن</th>
                      <td>
                        <input type="text" class="form-control" id="Readingspeed" name="Readingspeed" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">نوع</th>
                      <td>
                        <input type="text" class="form-control" id="type" name="type" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">فضای ذخیره سازی</th>
                      <td>
                        <input type="text" class="form-control" id="Capacity" name="Capacity" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">فرم داکتور</th>
                      <td>
                        <input type="text" class="form-control" id="formdactor" name="formdactor" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">رابط</th>
                      <td>
                        <input type="text" class="form-control" id="connector" name="connector" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">وزن</th>
                      <td>
                        <input type="text" class="form-control" id="weight" name="weight" value="" placeholder="..."/>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">سایز</th>
                      <td>
                        <input type="text" class="form-control" id="size" name="size" value="" placeholder="..."/>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br>
              <div class="row form-group mb-4">
              <div class="col">
                <label for="product">عکس محصولات:</label>
                <input accept='image/*' type="file" class="form-control" id="image" name="image0" required />
                <input accept='image/*' type="file" class="form-control" id="image" name="image1"  />
                <input accept='image/*' type="file" class="form-control" id="image" name="image2"  />
                <input accept='image/*' type="file" class="form-control" id="image" name="image3"  />

              </div>
              </div>
              
              <div class="form-group mb-4">
                <br>
                <button type="submit" class="btn btn-success">اشتراک گذاری</button>
              </div>
              </div>
              
   

        </div>
      </div>
    </div>
  </div>

