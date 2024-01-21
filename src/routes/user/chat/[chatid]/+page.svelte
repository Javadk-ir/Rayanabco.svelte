<script lang="ts">
    import { onMount } from 'svelte';
      import type { PageData } from './$types';
      import { page } from '$app/stores';
  import { enhance } from '$app/forms';
  
      export let data: PageData;
      $: ({
      users,
      GroupChat,
      chatroom,
      selectedChat,
      chatroommessage
      } = data);
  
    const client = $page.data.client
      let value = '.'
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
                                <img src="https://rayanabcom.storage.iran.liara.space/assest/defualt-img.png" alt="آواتار" class="rounded-circle">

                              </div>
                              <div class="chat-contact-info flex-grow-1 ms-3">
                                <h6 class="m-0">{selectedChat}</h6>
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
                                </div>
                              </div>
                            </li>
  
                            {:else if chatroommessage.message[index].send=='sys'}
                            <li class="chat-message chat-message-right">
                              <div class="d-flex overflow-hidden">
                                <div class="chat-message-wrapper flex-grow-1">
                                  <div class="chat-message-text">
                                    سیستم:
                                    <p class="mb-0">{chatroommessage.message[index].body} 
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
                                    </p>
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
                                    </p>
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
                          <form class="form-send-message d-flex justify-content-between align-items-center" action="?/add" method="POST" use:enhance>
                            <input type="text" class="form-control message-input border-0 me-3 shadow-none" bind:value={value}  placeholder="پیام خود را اینجا بنویسید">
                            <input type="hidden" bind:value={value} name="messageSended" placeholder="پیام خود را اینجا بنویسید">
                            <input type="hidden" name="userID" value="{client.name}">
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