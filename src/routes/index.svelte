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
    <div class="col py-5">
      <h1 class="text-primary">Word Counter</h1>
      <p class="text-secondary">
        Công cụ phân tích và thống kê văn bản.
        <br />
        Nhập văn bản vào ô bên dưới, công cụ sẽ thống kê số từ (words), câu
        (sentences), đoạn văn (paragraphs),...
      </p>
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
        <div class="col-8 text-dark">Paragraphs</div>
        <div class="col-4">
          <span class="badge badge-pill badge-secondary">
            {counter.paragraphs}
          </span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark">Sentences</div>
        <div class="col-4">
          <span class="badge badge-pill badge-secondary">
            {counter.sentences}
          </span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark">Words</div>
        <div class="col-4">
          <span class="badge badge-pill badge-secondary">{counter.words}</span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark">Characters</div>
        <div class="col-4">
          <span class="badge badge-pill badge-secondary">
            {counter.characters}
          </span>
        </div>
      </div>
      <div class="row p-2 mb-1">
        <div class="col-8 text-dark">Characters (with spaces)</div>
        <div class="col-4">
          <span class="badge badge-pill badge-secondary">{counter.all}</span>
        </div>
      </div>
    </div>
  </div>
</div>
