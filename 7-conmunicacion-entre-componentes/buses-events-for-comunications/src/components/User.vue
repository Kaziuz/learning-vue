<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <button @click="changeAge">Change my age</button>
        <p>The name is: {{ name }}</p>
        <p>The age is: {{ age }}</p>
        <hr>
        <div class="row">
          <!-- 
            el prop :myAge solo funcionara en una plantilla simple 
            @nameWasReset es un evento que se emite desde el componente
            app-user-email que indica al componente padre que name ha cambiado
          -->
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                  :name="name"
                  :myAge="age"
                  @nameWasReset="name = $event"
                  :resetFn="resetName"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                  :myAge="age"
                  @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
          return {
            name: 'Alex',
            age: 12
          }
        },
        methods: {
          changeName: function() {
            this.name = 'Toña'
          },
          changeAge: function() {
            this.age = 32
          },
          resetName: function() {
            this.name = 'Alex'
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
