<!-- Use external markdown resource, separate slides by three newlines; vertical slides by two newlines -->

> <!-- .element style="text-align: left" -->
> When I find myself in times of trouble \
> mother Runtime comes to me \
> speaking words of Tolerance \
> Let It Crash.

Noone Ever <!-- .element style="text-align: right" --> \
(The Bugs)



#### Your stack is too damn complex
----
### Let it 🧨 Crash 🔥 with
## Elixir



## Client Requirements
- small box
- always available
- expect load peaks



## The System 🖥️
https://linode-micro.ftes.de
<!-- TODO QR Code -->
- please hammer the system :)



## The Bugs 🐛
- edge case: error
- edge case: slow calc
- edge case: infinite loop



## Ops hat on 👷‍♀️
- shell & std lib only
<!-- second display / vertical split: always keep dashboard visible? -->



## The Solution ✅
- hot code update via scp



## The Stack 📚
BEAM trivia + basic architecture



## The Primitives 🧩
- what primitives must the runtime proide to enable this?
- preemptive scheduling
- introspection
- fault isolation
- (distribution)



## The table 🍽️
|           | Stack A | Stack B|
|-----------|---------|--------|
| web server |         | |
| cache      | Redis   | |
| µ-service comm | RabbitMQ | |
| deployment | Kubnernetes | |
| observability (distributed traces) |      | |
| UI | SPA + GraphQL API | |




## What woud your stack do?



## Use cases
1. High availability
2. Start ups (resource constraints, build fast + scalable)



## Elixir + LiveView
- demo developer experience
- highly productive
