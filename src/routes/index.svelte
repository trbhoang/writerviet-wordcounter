<script>
  import { textarea_resize } from "./_helpers/autoresize_textarea.js";
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

<svelte:head>
  <title>Word counter</title>
</svelte:head>

<div class="container mb-5">
  <div class="row">
    <div class="col py-5">
      <h1 class="text-primary">Word Counter</h1>
      <p class="text-secondary">
        Công cụ phân tích và thống kê văn bản.
        <br />
        Nhập văn bản vào ô bên dưới, công cụ sẽ thống kê số từ, câu, đoạn
        văn,...
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-9 pb-5">
      <textarea class="form-control box" id="text" use:textarea_resize />
    </div>
    <div class="col-md-3">
      <div class="row p-1 mb-1">
        <div class="h6 col-12 text-primary">Thống kê</div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark">Paragraphs</div>
        <div class="col-4">
          <span class="text-secondary">1,098</span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark">Sentences</div>
        <div class="col-4">
          <span class="text-secondary">1,098</span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark">Words</div>
        <div class="col-4">
          <span class="text-secondary">1,098</span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark">Words (no spaces)</div>
        <div class="col-4">
          <span class="text-secondary">1,098</span>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="footer container position-relative pt-5">
  <hr />
  <p>&copy; 2020 WriterViet</p>
</footer>
