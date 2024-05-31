FROM centos:latest
RUN yum install java -y
RUN mkdir /opt/tomcat
WORKDIR /opt/tomcat
ADD https://dlcdn.apache.org/tomcat/tomcat-11/v11.0.0-M20/bin/apache-tomcat-11.0.0-M20.tar.gz .
RUN tar -xvzf apache-tomcat-11.0.0.tar.gz
RUN mv apache-tomcat-11.0.0/* /opt/tomcat
EXPOSE 8080
CMD [ "/opt/tomcat/bin/catalina.sh","run" ]