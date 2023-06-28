<template>    
    this is home
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        id: '1',
                        title: 'Dashboard',
                        description: 'Get detailed anlytics to measure and analyze how users engage with your app',
                        color: 'orange'
                    },
                    {
                        id: '2',
                        title: 'Storage',
                        description: 'Store and retrieve user-generated content, such as images, audio, and videos, without server-side code.',
                        color: 'teal'
                    },
                    {
                        id: '3',
                        title: 'Notifications',
                        description: 'Manage your notification campaigns and send messages to reach the right users at the right time',
                        color: 'blue'
                    },
                    {
                        id: '4',
                        title: 'Authentification',
                        description: 'Authenticate and manage users from a variety of providers without server-side-code',
                        color: 'purple'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .outine-2 {
        border: 2px solid white;
    }

    .card--flex-toolbar {
        margin-top: -124px;
    }

    .learn-more-btn {
        text-transform: initial;
        text-decoration: underline;
    }
</style>
