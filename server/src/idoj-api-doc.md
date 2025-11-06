# I dream of Jeannie API Documentation

Base URL: `http://localhost:3000`

| Resource     | Method | Endpoint            | Description                                 |
| ------------ | ------ | ------------------- | ------------------------------------------- |
| `characters` | GET    | /get-all-characters | Retrieves all characters from the database. |

## Database Schema

The `characters` SQL table was created with the following structure:

```sql
CREATE TABLE characters(
  character_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  type VARCHAR NOT NULL,
  played_by VARCHAR NOT NULL
);
```

The table was seeded with sample data:

```sql
-- Insert all characters (main + recurring) into the "characters" table
INSERT INTO characters(
  name, description, type, played_by
)
VALUES
  -- Main characters
  ('Jeannie', 'A beautiful, loyal, and powerful but mischief-prone genie from the fictional nation of Basenji, who becomes a servant to whomever unseals her bottle.', 'main', 'Barbara Eden'),
  ('Captain/Major Anthony "Tony" Nelson', 'An astronaut and U.S. Air Force officer who discovers Jeannie.', 'main', 'Larry Hagman'),
  ('Captain/Major Roger Healey', 'Tony''s best friend and fellow astronaut, and a U.S. Army officer, whom Tony entrusts with Jeannie''s secret.', 'main', 'Bill Daily'),
  ('Colonel Alfred Bellows, MD', 'A psychiatrist and Tony''s suspicious superior.', 'main', 'Hayden Rorke'),

  -- Recurring characters
  ('General Martin Peterson', 'A U.S. military general appearing in seasons 1–4 (35 episodes).', 'recurring', 'Barton MacLane'),
  ('Amanda Bellows', 'Wife of Colonel Alfred Bellows, appearing in seasons 2–5 (34 episodes).', 'recurring', 'Emmaline Henry'),
  ('General Winfield Schaeffer', 'A U.S. general appearing in seasons 4–5 (20 episodes).', 'recurring', 'Vinton Hayworth'),
  ('Brigadier General Wingard Stone', 'A brigadier general appearing in season 1, episodes 1 and 4.', 'recurring', 'Philip Ober'),
  ('Melissa Stone', 'Wife of Brigadier General Wingard Stone, appearing in season 1, episodes 1 and 4.', 'recurring', 'Karen Sharpe'),
  ('Haji', 'Master of all the genies, appearing in seasons 2–3.', 'recurring', 'Abraham Sofaer'),
  ('The Blue Djinn', 'A powerful genie who appears in season 2, episode 1; also portrayed King Kamehameha (season 3, episode 19), and Major Biff Jellico (season 5, episode 12). Directed one episode in season 5.', 'recurring', 'Michael Ansara'),
  ('Jeannie II', 'Jeannie''s evil sister who schemes to steal Tony from Jeannie, appearing in seasons 3–5.', 'recurring', 'Barbara Eden'),
  ('Sully', 'Jeannie''s uncle who calls upon her to become the queen of Basenji during an armed conflict.', 'recurring', 'Jackie Coogan'),
  ('Jeannie''s Mother (Florence Sundstrom)', 'Jeannie''s mother appearing in season 1, episode 2.', 'recurring', 'Florence Sundstrom'),
  ('Jeannie''s Mother (Lurene Tuttle)', 'Jeannie''s mother appearing in season 1, episode 14.', 'recurring', 'Lurene Tuttle'),
  ('Jeannie''s Mother', 'A mischeveous woman who always wants to get Captain Nelson in trouble.', 'recurring', 'Barbara Eden');

```

---

## Characters

### 🔹 GET `/get-all-characters`

**Description:** Retrieves all characters stored in the database.

**Example Request URL:**
`GET http://localhost:3000/get-all-characters`

**Example Response:**

```json
[
  {
    "character_id": 1,
    "name": "Jeannie",
    "description": "A beautiful, loyal, and powerful but mischief-prone genie from the fictional nation of Basenji, who becomes a servant to whomever unseals her bottle.",
    "type": "main",
    "played_by": "Barbara Eden"
  },
  {
    "character_id": 2,
    "name": "Captain/Major Anthony \"Tony\" Nelson",
    "description": "An astronaut and U.S. Air Force officer who discovers Jeannie.",
    "type": "main",
    "played_by": "Larry Hagman"
  }
]
```
