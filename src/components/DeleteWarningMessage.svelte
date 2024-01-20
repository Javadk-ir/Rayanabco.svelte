<script lang='ts'>
    export let id: any = 'DeleteModal'
    export let name: any = ' '
    import {enhance} from '$app/forms';

</script>
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#{id}"><i class="fa-regular fa-trash-can"></i></button>

<!-- Delete Modal -->
             <div class="modal fade" id="{id}" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered1 modal-simple modal-add-new-cc">
                  <div class="modal-content p-3 p-md-5">
                    <div class="modal-body">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      <div class="text-center mb-4 mt-0 mt-md-n2">
                        <h3 class="secondary-font text-warning"><i class="fa-solid fa-triangle-exclamation"></i></h3>
                        <p>شما در حال حذف کردن <span class="text-danger">{name}</span> هستید</p>
                      </div>
                      <form id="DeleteModal" class="row " action="?/delete" method="POST" use:enhance>
                        <div class="col-6 d-grid" style="text-align: left;">
                            <a href="#o" class="btn btn-light" data-bs-dismiss="modal" aria-label="Close"> انصراف </a>
                        </div>
                        <input type="hidden" name="name" value="{name}">
                        <div class="col-6 d-grid" style="text-align: right;" data-bs-toggle="modal" data-bs-target="#succesfulModal">
                            <button type="submit" class="btn btn-danger"> حذف </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
<!--/ Delete Modal -->



