/**
 * Created by c-zouzhongxing1 on 2019/2/25. 
 */
export default{
  data(){
    return {
      editorVisible: false,
      form: {
        name:'',
        content:''
      }
    }
  },
  created(){
    console.log(this.$route.query.id)
  },
  methods: {
    selectTemplate(id){
      this.editorVisible = true;
      this.form.content = this.getTemplateContent(id);
    },
    getTemplateContent(id){
      this.$loader.show();
      this.$ajax({
        type: 'get',
        url: this.$baseUrl + '/admin/template/getById',
        data: {
          id: id,
          time: Date.now()
        },
        success: (res) => {
          console.log(res.data);
          this.form = res.data;
          // this.form.name = res.data.name;
          // this.form.content = res.data.content;
        },
        error: (res) => {
          console.log(res)
        }
      });

    },
    saveTemplate(){
      this.$loader.show();
      this.form.content = this.$refs.editor.content;
      console.log(this.form)
      this.$ajax({
        type: 'post',
        url: this.$baseUrl + '/admin/template/update',
        // data: this.form,
        data: {
          form: JSON.stringify(this.form)
        },
        success: (res) => {
          console.log(res);
        },
      });

    }
  }

}
