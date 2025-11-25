---
title: "I cut database costs by 50% with simple queries"
pubDatetime: 2024-11-19T00:00:00Z
description: "Query times dropped from 1-2 seconds to 10-20 milliseconds. Cut database costs by over 50% without upgrading hardware."
slug: "2024-11-19-reduce-db-cost-with-query-optimizations"
featured: false
draft: false
tags:
  - engineering
---

![Reduce Database Costs](../../assets/images/db-cost-opt-with-query-opt.webp)

For a while, I was too busy rolling out features to really think about the workload on our Cloud SQL database. I knew the CPU usage was high, especially in the evenings when user activity spiked and background jobs kicked in. But I kept telling myself, “I’ll deal with it later.” Later turned into months.

Eventually, the rising costs were impossible to ignore. My first thought? Upgrade the database. More CPUs, more memory, maybe even split the workload across services. But before going down that road, I decided to take a closer look.

### TL;DR

By using Google Cloud SQL’s Query Insights, I found inefficient queries that were causing CPU spikes and driving up costs. These queries weren’t using proper indexes, leading to expensive table scans. I optimized them by restructuring queries to leverage indexed fields, reducing execution times from 1-2 seconds to 10-20 milliseconds. The result? I downgraded the database instance, cutting costs by over 50% and improving performance dramatically.

### Digging into Query Insights

I turned to Query Insights in Google Cloud SQL. It’s a simple but powerful tool that shows you which queries are putting the most strain on your database. It didn’t take long to spot the problem.

There was a set of queries taking 1-2 seconds to run. Not a big deal on their own, but they were being called around 50,000 times a day. That adds up. Most of the CPU spikes came from these queries, and they were slow because they weren’t using the database’s indexes properly.

### Uncovering the root cause

The main issue? The queries were filtering on fields that weren’t indexed. For example, one query looked for user profile data by filtering on `user_id` and `meta`. Neither of these fields had indexes, so the database had to scan the whole table to find matches.

The solution turned out to be pretty simple. I restructured the query to use an indexed column that combined `user_id` and `meta` into one field. By querying this column directly, the database avoided expensive table scans.

Query times dropped from 1-2 seconds to 10-20 milliseconds. Just like that.

### The outcome

Once I applied this and a few similar optimizations, the changes were dramatic:

- CPU usage flattened, even during peak hours.
- Performance bottlenecks disappeared.
- I downgraded the database to a smaller, cheaper tier, cutting costs by over 50%

### What I Learned

- **Scaling is not always the solution**: Tools like Query Insights can help you find inefficiencies before throwing money at the problem.
- **Optimizations go a long way**: Small changes in how you structure queries can have a massive impact.
- **Simple improvements matter**: Sometimes, the solution is much easier than you’d expect.

This experience reminded me to pause and look closer before jumping to conclusions. Have you ever found a simple fix that saved you time, money, or both? I’d love to hear your story.
