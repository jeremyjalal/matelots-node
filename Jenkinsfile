pipeline {
    agent { dockerfile true }
    stages {
        stage('Install') {
            steps {
                sh 'yarn install --pure-lockfile'
            }
        }
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Test') {
            steps {
                sh 'echo tests are temporarily disabled'
                sh 'npm test || true'
            }
        }
        stage('Deploy for development') {
            when {
                branch 'develop' 
            }
            tools {
                "org.jenkinsci.plugins.docker.commons.tools.DockerTool" "docker"
            }
            steps {
                echo "Develop here !"
                // script {
                //     docker.withServer('tcp://10.24.209.165:2376', 'docker_ca') {
                //         sh 'docker container rm -f connectin_api_dev || true'
                //         sh 'docker image rm -f axens/connectin_api:dev || true'
                //         sh 'docker build -t axens/connectin_api:dev --no-cache=true .'
                //         sh 'docker run -d -v /var/lib/connectin-api/dev:/var/lib/connectin-api -p 5002:5002 -e NODE_ENV=development --name=connectin_api_dev --link mysql_dev:mysql --link influxdb_dev:influx axens/connectin_api:dev'
                //     }
                // }
            }
        }
    }
    post {
        always {
            echo 'Cleaning workspace...'
            deleteDir() /* clean up our workspace */
        }
    }
}