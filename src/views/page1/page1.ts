import { Page1Service } from './page1.service';
export default {
  name: 'page-1',
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {
    const page1Service = new Page1Service();
    page1Service.getUsers().then((response) => {
      console.log(response.data)

    }).catch((err) => {
      console.log("ERR", err.response)
    })

  },
  methods: {},
};
