/**
 * Created by c-zouzhongxing1 on 2019/2/28. 
 */
export default{
  data(){
    return {
      form: {
        name: '',
        content: ''
      }
    }
  },
  created(){
    console.log(this.$route.params.id)
    this.getTemplateContent(this.$route.params.id);
  },
  methods: {
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
