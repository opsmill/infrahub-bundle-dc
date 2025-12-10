# AGENTS.md - Service Catalog

> Guidance for AI coding assistants working in the `service_catalog/` directory.
> Parent: [../AGENTS.md](../AGENTS.md)

## Overview

A Streamlit-based web application for visualizing and managing infrastructure resources through Infrahub. Provides a user-friendly interface for data center creation, rack visualization, and VLAN management.

## Tech Stack

- **Framework**: Streamlit
- **API Client**: Infrahub SDK + GraphQL
- **Data**: Pandas for data manipulation
- **Configuration**: python-dotenv

## Build Commands

```bash
# Run locally (from project root)
cd service_catalog
streamlit run Home.py

# Or via Docker (when INFRAHUB_SERVICE_CATALOG=true)
# Access at: http://localhost:8501
```

### Dependencies

The service catalog has its own `requirements.txt` but shares dependencies with the main project via `pyproject.toml`. Use `uv sync` from the project root.

## Directory Structure

```text
service_catalog/
├── Home.py              # Main landing page
├── pages/
│   ├── 1_Create_DC.py   # Data center creation workflow
│   ├── 2_Rack_Visualization.py  # Rack diagrams
│   └── 3_VLAN_Management.py     # VLAN management
├── utils/
│   ├── api.py           # Infrahub API client and GraphQL queries
│   ├── config.py        # Configuration settings
│   ├── rack.py          # Rack visualization helpers
│   └── ui.py            # Reusable UI components
├── assets/              # Static files (logos, images)
├── tests/               # Service catalog tests
├── .streamlit/          # Streamlit configuration
├── Dockerfile           # Container build
└── requirements.txt     # Python dependencies
```

## Code Style Guidelines

### Streamlit Patterns

- Use `st.session_state` for state management across reruns
- Prefer `st.columns()` for responsive layouts
- Use `st.cache_data` for expensive data fetches
- Group related UI elements in `st.container()` or `st.expander()`

### API Client Pattern

All Infrahub interactions go through `utils/api.py`:

```python
from utils.api import InfrahubAPI

api = InfrahubAPI()
data_centers = await api.get_data_centers(branch="main")
```

### UI Components

Reusable components are in `utils/ui.py`:

```python
from utils.ui import render_header, show_error_message

render_header("Page Title")
show_error_message("Something went wrong")
```

## Testing

```bash
# Run service catalog tests
uv run pytest service_catalog/tests/

# Tests are in service_catalog/tests/
```

## Key Patterns

### Branch Selection

All pages should support branch selection:

```python
branch = st.sidebar.selectbox("Branch", branches, index=0)
```

### Progress Tracking

Use Streamlit's progress indicators for long operations:

```python
with st.spinner("Creating data center..."):
    result = await api.create_dc(params)
st.success("Data center created!")
```

### Error Handling

Wrap API calls with try/except and show user-friendly errors:

```python
try:
    result = await api.some_operation()
except Exception as e:
    st.error(f"Operation failed: {e}")
```

## Environment Variables

The service catalog uses the same environment variables as the main project:

```bash
INFRAHUB_ADDRESS="http://localhost:8000"
INFRAHUB_API_TOKEN="<your-token>"
```

Enable in Docker:

```bash
INFRAHUB_SERVICE_CATALOG=true  # In .env or docker-compose.override.yml
```

## Common Pitfalls

1. **Missing session state initialization** - Initialize state at page load
2. **Blocking async calls** - Use `asyncio.run()` or Streamlit's async support
3. **Large data in session state** - Cache expensive computations instead
4. **Hardcoded URLs** - Use `utils/config.py` for configuration
5. **Missing error handling** - Always wrap API calls with try/except

## Relationship to Main Project

- Uses shared dependencies from `pyproject.toml`
- Consumes Infrahub SDK for API interactions
- Follows same code style guidelines (type hints, docstrings)
- Tests are run as part of the main test suite
