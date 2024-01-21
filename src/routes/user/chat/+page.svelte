<script lang="ts">
  import { onMount } from 'svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    $: ({
      client,
    users,
    GroupChat,
    chatroommessage
    } = data);


    function gettimer(value1: any, value2: any) {
          let date1 = value1
          let date2 = value2
          if (value1 == undefined) date1 = new Date()
          if (value2 == undefined) date2 = date1

          let diff = date2.getTime() - date1.getTime();

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

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/vendor/css/pages/app-chat.css">
        <script defer src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.js"></script>
        <script defer  src="https://cdn.jsdelivr.net/gh/3exyDevil/Website-Files@main/assets/js/app-chat.js"></script>
</svelte:head>
          <!-- Content wrapper -->
          <div class="content-wrapper">
            <!-- Content -->

            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="app-chat card overflow-hidden">
                <div class="row g-0">
                  <!-- Chat & Contacts -->
                  <div class="col app-chat-contacts app-sidebar flex-grow-0 overflow-hidden border-end" id="app-chat-contacts">

                    <div class="sidebar-body">
                      <!-- Chats -->
                      <ul class="list-unstyled chat-contact-list" id="chat-list">
                        <li class="chat-contact-list-item chat-contact-list-item-title">
                          <h5 class="text-primary mb-0 secondary-font">گفتگوها</h5>
                        </li>
                        <li class="chat-contact-list-item">
                          <a href="/user/chat" class="d-flex align-items-center">
                            <div class="flex-shrink-0 avatar">
                              <i class="fa-regular fa-solid fa-bookmark text-info rounded-circle" style="font-size: 20px;"></i>

                            </div>
                            <div class="chat-contact-info flex-grow-1 ms-3">
                              <h6 class="chat-contact-name text-truncate m-0">Saved Message</h6>
                            </div>
                          </a>
                        </li>
                        {#each users as user}
                        <li class="chat-contact-list-item">
                          <a href="/user/chat/{user.name}" class="d-flex align-items-center">
                            <div class="flex-shrink-0 avatar">
                              <img src="https://rayanabcom.storage.iran.liara.space/assest/defualt-img.png" alt="آواتار" class="rounded-circle">
                            </div>
                            <div class="chat-contact-info flex-grow-1 ms-3">
                              <h6 class="chat-contact-name text-truncate m-0">{user.name}</h6>
                            </div>
                          </a>
                        </li>
                        {/each}
                        {#each GroupChat as user}
                        <li class="chat-contact-list-item">
                          <a href="/user/chat/{user.GPname}" class="d-flex align-items-center">
                            <div class="flex-shrink-0 avatar">
                              {user.GPicon}
                            </div>
                            <div class="chat-contact-info flex-grow-1 ms-3">
                              <h6 class="chat-contact-name text-truncate m-0">{user.GPname}</h6>
                            </div>
                          </a>
                        </li>
                        {/each}
                      </ul>

                      </div>
                    </div>

                  <!-- Chat History -->
                  <div class="col app-chat-history bg-body">
                    <div class="chat-history-wrapper">
                      <div class="chat-history-header border-bottom">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex overflow-hidden align-items-center">
                            <i class="bx bx-menu bx-sm cursor-pointer d-lg-none d-block me-2" data-bs-toggle="sidebar" data-overlay data-target="#app-chat-contacts"></i>
                            <div class="flex-shrink-0 avatar">
                              <i class="fa-regular fa-solid fa-bookmark text-info rounded-circle" data-bs-toggle="sidebar" data-overlay data-target="#app-chat-sidebar-right" style="font-size: 20px;"></i>
                            </div>
                            <div class="chat-contact-info flex-grow-1 ms-3">
                              <h6 class="m-0">Save Messaged</h6>
                              <!-- <small class="user-status text-muted">توسعه دهنده NextJS</small> -->
                            </div>
                          </div>

                        </div>
                      </div>
                      <div class="chat-history-body bg-body">
                        <ul class="list-unstyled chat-history mb-0">

                          {#each {length: chatroommessage.message.length} as _, index}
                          {#if chatroommessage.send == client.name}
                          <li class="chat-message chat-message-right">
                            <div class="d-flex overflow-hidden">
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">{chatroommessage.message[index].body} 
                                    <!-- TODO DOKME HAZF EzAFE KON -->
                                  </p>
                                </div>
                                <div class="text-end text-muted mt-1">
                                  <i class="bx bx-check-double text-success"></i>
                                  <small>{gettimer(chatroommessage.message[index].time,new Date())}  پیش
                                  </small>
                                </div>
                              </div>
                              <div class="user-avatar flex-shrink-0 ms-3">
                                <div class="avatar avatar-sm">
                                  <img src="https://rayanabcom.storage.iran.liara.space/assest/defualt-img.png" alt="آواتار" class="rounded-circle">
                                </div>
                              </div>
                            </div>
                          </li>

                          {:else if chatroommessage.message[index].send=='sys'}
                          <li class="chat-message chat-message-right">
                            <div class="d-flex overflow-hidden">
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">{chatroommessage.message[index].body} 
                                    <!-- TODO DOKME HAZF EzAFE KON -->
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                          {:else}
                          {#if chatroommessage.message[index].send == chatroommessage.GPcreator}
                          <li class="chat-message chat-message-left">
                            <div class="d-flex overflow-hidden">
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">{chatroommessage.message[index].body} 
                                    <!-- TODO DOKME HAZF EzAFE KON -->
                                  </p>
                                </div>
                                <div class="text-end text-muted mt-1">
                                  <i class="bx bx-check-double text-success"></i>
                                  <small>{gettimer(chatroommessage.message[index].time,new Date())}  پیش
                                  </small>
                                </div>
                              </div>
                              <div class="user-avatar flex-shrink-0 ms-3">
                                <div class="avatar avatar-sm">
                                  <img src="https://rayanabcom.storage.iran.liara.space/assest/defualt-img.png" alt="آواتار" class="rounded-circle">
                                </div>
                              </div>
                            </div>
                          </li>
                          {:else}
                          <li class="chat-message chat-message-left">
                            <div class="d-flex overflow-hidden">
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">{chatroommessage.message[index].body} 
                                    <!-- TODO DOKME HAZF EzAFE KON -->
                                  </p>
                                </div>
                                <div class="text-end text-muted mt-1">
                                  <i class="bx bx-check-double text-success"></i>
                                  <small>{gettimer(chatroommessage.message[index].time,new Date())}  پیش
                                  </small>
                                </div>
                              </div>
                              <div class="user-avatar flex-shrink-0 ms-3">
                                <div class="avatar avatar-sm">
                                  <img src="https://rayanabcom.storage.iran.liara.space/assest/defualt-img.png" alt="آواتار" class="rounded-circle">
                                </div>
                              </div>
                            </div>
                          </li>
                          {/if}
                          {/if}
                          {/each}

                        </ul>
                      </div>
                      <!-- Chat message form -->
                      <div class="chat-history-footer shadow-sm">
                        <form class="form-send-message d-flex justify-content-between align-items-center">
                          <input class="form-control message-input border-0 me-3 shadow-none" placeholder="پیام خود را اینجا بنویسید">
                          <div class="message-actions d-flex align-items-center">
                            <button class="btn btn-primary d-flex send-msg-btn">
                              <i class="bx bx-paper-plane me-md-1 me-0"></i>
                              <span class="align-middle d-md-inline-block d-none">ارسال</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- /Chat History -->


                  <div class="app-overlay"></div>
                </div>
              </div>
            </div>
            <!-- / Content -->
            </div>