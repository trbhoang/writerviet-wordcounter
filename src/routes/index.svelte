<script>
  import { textarea_resize } from "./_helpers/autoresize_textarea.js";
  import count from "./_helpers/counter.js";

  let text = "";
  $: counter = count(text);
</script>

<style>
  .box {
    background-color: #fff;
    border: 1px solid #d1d5da;
    border-radius: 3px;
  }

  #text {
    min-height: 300px;
  }
</style>

<div class="container mb-5">
  <div class="row">
    <div class="col pt-5 pb-3">
      <h3 class="text-primary">Đếm chữ</h3>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-8 pb-5">
      <textarea
        class="form-control box"
        id="text"
        use:textarea_resize
        bind:value={text}
        placeholder="Nội dung..." />
    </div>
    <div class="col-md-4">
      <div class="row p-1 mb-1">
        <div class="h6 col-12 text-primary">Thống kê</div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark font-medium">Số đoạn văn</div>
        <div class="col-4">
          <span class="badge badge-pill badge-secondary">
            {counter.paragraphs}
          </span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark font-medium">Số câu</div>
        <div class="col-4">
          <span class="badge badge-pill badge-secondary">
            {counter.sentences}
          </span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark font-medium">Số từ</div>
        <div class="col-4">
          <span class="badge badge-pill badge-secondary">{counter.words}</span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark font-medium">Số kí tự</div>
        <div class="col-4">
          <span class="badge badge-pill badge-secondary">
            {counter.characters}
          </span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark font-medium">
          Số kí tự
          <span class="text-gray-500 text-sm">(tính khoảng trắng)</span>
        </div>
        <div class="col-4">
          <span class="badge badge-pill badge-secondary">{counter.all}</span>
        </div>
      </div>
    </div>
  </div>
</div>
