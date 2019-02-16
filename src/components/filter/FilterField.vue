<template>
  <div class="layout align-center" :style="`height: ${height}px;`">
    <tool-tip-btn round
                  @click="setOpenedTextField"
                  active_icon = "search"
                  active_text = "Завершить поиск"
                  deactive_text="Начать поиск"
                  class="ma-0"
                  :active = "openedTextField"
                  bottom></tool-tip-btn>
    <v-text-field
        v-if="openedTextField"
        v-model="filterStr"
        @input="$emit('setFilterStr', filterStr)"
        :height="height"
        :prepend-icon="(prependIcon ? 'search' : '')"
        :append-icon="(appendIcon ? 'search' : '')"
        :append-outer-icon="(appendOuterIcon ? 'search' : '')"
        :solo="solo || openedTextField"
        :placeholder="placeholder"
        :hide-details="true"
        :autofocus="true"
        class="pa-0 ma-0"
    ></v-text-field>
  </div>
</template>

<script>
import ToolTipBtn from "../common/ToolTipBtn";

export default {
  name: "FilterField",

  components: {
    ToolTipBtn
  },

  data: () => ({
    filterStr: "",
    openedTextField: false
  }),

  props: {
    // Тип компонента Иконка - при клике на которую открывается интпут
    prependIcon: {
      type: Boolean,
      default: false
    },
    appendIcon: {
      type: Boolean,
      default: false
    },
    appendOuterIcon: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    solo: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 35
    }
  },

  computed: {},

  methods: {
    // отобразить поле для поиска
    setOpenedTextField() {
      this.openedTextField = !this.openedTextField;
      if (!this.openedTextField) {
        this.filterStr = "";
        this.$emit("setFilterStr", this.filterStr);
      }
    }
  }
};
</script>
