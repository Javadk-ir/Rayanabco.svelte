<script>
    import { page } from '$app/stores';
    const client = $page.data.client
</script>


<div class="alert alert-success alert-dismissible" role="alert">
    <h6 class="alert-heading mb-1"><i class='bx bx-check-circle'></i>موفقیت امیز بود !</h6>
    <span>عملیات درخواست شده توسط {client.name} با موفقیت انجام شد</span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>