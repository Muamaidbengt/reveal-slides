# Terraform

## Infrastructure as Code

#### Lemontree 2021

***

## Looking back

![Hammer](images/hammer.jpg)

Note: Looking back to the time before the cloud, we were usually forced to deal with physical hardware whenever we wanted to build a new application or service. Perhaps we needed to order a new physical server to host the app. Fill out some change request to get the network team to open up the firewall restrictions. Mount disks and decide which level of redundancy we needed etc.

---

## Virtualization

![Server rack](images/rack.jpg)

Note: Virtualization made it possible to pack services tighter, decreasing costs for operation and maintenance. It also allowed for more fungible solutions, for instance by adding more resources to an existing service as its load increased. Servers (or computing resources) were becoming more of a commodity, something that could be bought and discarded, rather than artifacts of their own.

---

## Cloud infrastructure

![Cloud infrastructure](images/iot.jpg)

Note: Cloud services built further upon virtualization and commodified not just computing resources, but more and more surrounding concepts as well, such as storage, logging and analytics services and firewall rules.

---

## Infrastructure as Code

![Infra as Code](images/terraform-iac.png) <!-- .element: class="contrast-background"  -->


***

```sh [|1|2-3]
$ terraform init
$ terraform plan
$ terraform apply
```

***

### Tack för mig

![Twitter](images/twitter.png) @muamaidbengt

![Github](images/github.png) github.com/muamaidbengt